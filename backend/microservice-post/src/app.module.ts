import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
