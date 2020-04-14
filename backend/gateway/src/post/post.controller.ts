import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post.interface';
import { FilesService } from '../files/files.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService,
              private filesService: FilesService) {
  }

  @MessagePattern('createPost')
  async createPost(contentPost: IPost) {
    const createPost = await this.postService.createPost(contentPost);
    const attachmentSend = await this.filesService.attachmentSend({
      fileId: contentPost.fileId,
      postId: createPost['_id']
    });
    return createPost;
  }


  @MessagePattern('addPost')
  async addPost(id) {
    return await this.postService.addPost(id);
  }

}
