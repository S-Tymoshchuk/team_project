import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PostModule, MongooseModule.forRoot('mongodb://localhost:27017', {
    useNewUrlParser: true, useUnifiedTopology: true,
  })],
})
export class AppModule {
}
