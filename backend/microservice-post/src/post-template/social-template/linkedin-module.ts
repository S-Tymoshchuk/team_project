import { Module } from '@nestjs/common';
import { LinkedinTemplate } from './linkedin-service';
import { ScheduleSchema } from './schema/schedule-schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Schedule', schema: ScheduleSchema }]),
  ],
  providers: [LinkedinTemplate],
})
export class LinkedinModule {}
