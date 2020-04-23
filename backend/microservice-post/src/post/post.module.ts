import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';
import { SocialSchema } from './schema/social-connect.schema';
import { PostTemplateModule } from '../post-template/post-template.module';
import { PostTemplateService } from '../post-template/post-template.service';


@Module({
  imports:[MongooseModule.forFeature([{name:'Post', schema:PostSchema},{ name: 'SocialConnect', schema: SocialSchema }]), PostTemplateModule],
  providers: [PostService, PostTemplateService],
  controllers:[PostController]
})
export class PostModule {}
