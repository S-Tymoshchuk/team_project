import { Module } from '@nestjs/common';
import { SchedulesModule } from './schedules/schedules.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SchedulesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
