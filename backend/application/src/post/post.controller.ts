import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from './interfaces/post.interface';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('post')
export class PostController {
  constructor(private postsService: PostService) {
  }

  @Post('create')
  async createPost(@Body() postContent: IPost) {
    return this.postsService.createPost(postContent);
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFiles(@UploadedFile()file) {
    return this.postsService.uploadFiles(file);
  }
}
