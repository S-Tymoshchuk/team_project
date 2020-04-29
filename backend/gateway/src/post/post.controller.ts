import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post.interface';
import { FilesService } from '../files/files.service';
import { SchedulesService } from 'src/schedules/schedules.service';
import * as moment from 'moment';

@Controller('post')
export class PostController {
  constructor(
    private postService: PostService,
    private filesService: FilesService,
    private schedulesService: SchedulesService,
  ) {}

  @MessagePattern('createPost')
  async createPost(contentPost: IPost) {
    const createPost = await this.postService.createPost(contentPost);

    const attachmentSend = await this.filesService.attachmentSend({
      fileId: contentPost.fileId,
      postId: createPost['_id'],
    });
    const schedule = await this.schedulesService.createSchedul({
      providerId: contentPost.schedule.providerId,
      postId: createPost['_id'],
      userId: createPost['user'],
      startsAt: contentPost.schedule.startsAt,
      status: contentPost.schedule.status,
    });

    return createPost;
  }

  @MessagePattern('provider')
  async getProvider(provider) {
    return await this.postService.getProvider(provider);
  }
}
