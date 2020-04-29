import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
  UseGuards,
  Param,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from './interfaces/post.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user-decorator';
import { IFileRemoveInterface } from './interfaces/file-remove.interface';

@Controller('post')
export class PostController {
  constructor(private postsService: PostService) {}

  @UseGuards(AuthGuard())
  @Post('create')
  async createPost(@GetUser() user, @Body() postContent: IPost) {
    const { _id } = user;
    const content = { ...postContent, _id };

    return this.postsService.createPost(content);
  }

  @UseGuards(AuthGuard())
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFiles(@GetUser() user, @UploadedFile() file) {
    const { _id } = user;
    const content = { ...file, _id };
    return this.postsService.uploadFiles(content);
  }

  @Post('remove')
  async removeFiles(@Body() fileId: IFileRemoveInterface) {
    return this.postsService.removeFiles(fileId);
  }

  @Get('provider/:id')
  async providerId(@Query('id') id: string) {
    console.log(id);

    return this.postsService.getProvider(id);
  }
}
