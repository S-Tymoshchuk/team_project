import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ISchedule } from './interface/schedule.interface';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private scheduleService: SchedulesService) {}
  @MessagePattern('createSchedule')
  async crreateSchedule(schedules: ISchedule) {
    return await this.scheduleService.createSchedule(schedules);
  }
}
