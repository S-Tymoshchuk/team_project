import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from './interfaces/post.interface';

@Controller('post')
export class PostController {
  constructor(private postsService: PostService) {
  }

  @Post('create')
  async createPost(@Body() postContent: IPost) {
    return this.postsService.createPost(postContent);
  }
}
