import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPost } from './interfaces/post-interface';
import * as moment from 'moment';
import { SocialConnect } from './interfaces/social-connect.interfac';
import { PostTemplateService } from '../post-template/post-template.service';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post')
              private postModel: Model<IPost>,
              @InjectModel('SocialConnect')
              private socialConnect: Model<SocialConnect>,
              private postTemplate: PostTemplateService) {
  }

  async createPost(post): Promise<IPost> {
    const id = post._id;
    const createPost = new this.postModel({
      user: id,
      title: post.title,
      body: post.body,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    const result = await createPost.save();
    return result;
  }

  async findPost(id) {
    const test = await this.postModel.aggregate([
      {
        '$addFields': {
          'convertedId': {
            '$toString': '$_id',
          },
        },
      }, {
        '$match': {
          'user': `${id}`,
        },
      },
      {
        '$sort': {
          'createdAt': -1,
        },
      }, {
        '$limit': 1,
      },
      {
        '$lookup': {
          'from': 'attachments',
          'localField': 'convertedId',
          'foreignField': 'postId',
          'as': 'image',
        },
      },
    ]);
    return await test;
  }

  async getProvider(provider) {
    try {
      return await Promise.all(
        provider.map(async (item) => {
          const result = await this.socialConnect.findOne({ providerId: item });
          return this.postData(result);
        }),
      );
    } catch (error) {
      console.log(error);
      throw new error;
    }

  }

  async postData(data) {
    const { userId } = data;
    const postData = await this.findPost(userId);
    const post = postData[0];
    return await this.postTemplate.testMessage(data, post);
  }

}


/*
1.Form data Данные поста и файлы
2.Создаем запись поста
3.Загружаем атачменты на cloudinary
4.Создаем запись аттачмента с id posta и с данными Cloudinary
*/
