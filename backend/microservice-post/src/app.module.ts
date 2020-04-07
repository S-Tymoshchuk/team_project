import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { configModule } from './post/configure.root';


@Module({
  imports: [PostModule, configModule]
})
export class AppModule {}
