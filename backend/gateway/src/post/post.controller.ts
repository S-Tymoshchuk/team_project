import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post.interface';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @MessagePattern('createPost')
  async createPost(contentPost: IPost){
    return await this.postService.createPost(contentPost)
  }

}
