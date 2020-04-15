import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPost } from './interfaces/post-interface';
import * as moment from 'moment';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private postModel: Model<IPost>) {
  }

  async createPost(post): Promise<IPost> {
    const id = post._id;
    const createPost = new this.postModel({
      user: id,
      title: post.title,
      body: post.body,
      createdAt: moment().format(),
    });

   return  await createPost.save();
  }

  async addPost(id) {
    const test = await this.postModel.aggregate([
      {
        '$addFields': {
          'convertedId': {
            '$toString': '$_id'
          }
        }
      }, {
        '$match': {
          'user': `${id}`
        }
      }, {
        '$lookup': {
          'from': 'attachments',
          'localField': 'convertedId',
          'foreignField': 'postId',
          'as': 'image'
        }
      }
    ]);
    return await test;
  }
}

/*
1.Form data Данные поста и файлы
2.Создаем запись поста
3.Загружаем атачменты на cloudinary
4.Создаем запись аттачмента с id posta и с данными Cloudinary
*/
