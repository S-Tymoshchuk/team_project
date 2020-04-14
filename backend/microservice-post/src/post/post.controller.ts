import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post-interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {
  }

  @MessagePattern('createPost')
  async createPost(post):Promise<IPost>{
    return await this.postService.createPost(post)
  }

  @MessagePattern('addPost')
  async addPost(id){
    return await  this.postService.addPost(id)
  }
}
