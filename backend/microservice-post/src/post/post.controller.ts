import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IPost } from './interfaces/post-interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @MessagePattern('createPost')
  async createPost(post): Promise<IPost> {
    return await this.postService.createPost(post);
  }

  @MessagePattern('provider')
  async getProvider(provider) {
    if (Array.isArray(provider)) {
      return await this.postService.getProvider(provider);
    } else {
      const singleItem = [provider];
      return await this.postService.getProvider(singleItem);
    }
  }

  @MessagePattern('schedule')
  async getScheduls(data) {
    return await this.postService.getPost(data);
  }
}
