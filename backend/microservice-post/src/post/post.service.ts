import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPost } from './interfaces/post-interface';

@Injectable()
export class PostService {
constructor(@InjectModel('Post')private postModel: Model<IPost>) {
}

  async createPost(post):Promise<IPost>{
  const createPost = new this.postModel({
    title: post.title,
    body:post.body,
    createdAt: new Date()
  });
    return await createPost.save()
  }
}
