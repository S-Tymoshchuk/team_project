import { Module } from '@nestjs/common';
import { PostTemplateService } from './post-template.service';
import { LinkedinModule } from './social-template/linkedin-module';
import { LinkedinTemplate } from './social-template/linkedin-service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleSchema } from './social-template/schema/schedule-schema';

@Module({
  imports: [
    LinkedinModule,
    MongooseModule.forFeature([{ name: 'Schedule', schema: ScheduleSchema }]),
  ],
  providers: [PostTemplateService, LinkedinTemplate],
})
export class PostTemplateModule {}
