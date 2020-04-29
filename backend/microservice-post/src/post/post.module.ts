import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';
import { SocialSchema } from './schema/social-connect.schema';
import { PostTemplateModule } from '../post-template/post-template.module';
import { PostTemplateService } from '../post-template/post-template.service';
import { LinkedinModule } from 'src/post-template/social-template/linkedin-module';
import { LinkedinTemplate } from 'src/post-template/social-template/linkedin-service';
import { ScheduleSchema } from 'src/post-template/social-template/schema/schedule-schema';

@Module({
  imports: [
    LinkedinModule,
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'SocialConnect', schema: SocialSchema },
      { name: 'Schedule', schema: ScheduleSchema },
    ]),
    PostTemplateModule,
  ],
  providers: [PostService, PostTemplateService, LinkedinTemplate],
  controllers: [PostController],
})
export class PostModule {}
