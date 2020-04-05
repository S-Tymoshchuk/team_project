import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post.interface';

@Controller()
export class PostController {
  @MessagePattern('createPost')
  async createPost(contentPost: IPost) {
    console.log(contentPost);
    return contentPost
  }
}
