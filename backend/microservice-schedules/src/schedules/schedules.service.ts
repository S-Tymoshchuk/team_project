import { Injectable } from '@nestjs/common';
import { ISchedule } from './interface/schedule.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class SchedulesService {
  private client: ClientProxy;
  constructor(
    @InjectModel('Schedule')
    private scheduleModel: Model<ISchedule>,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8879,
      },
    });
  }

  async createSchedule(schedule) {
    const saveSchedule = new this.scheduleModel(schedule).save();
    return saveSchedule;
  }
  @Cron('1 * * * * *')
  async test() {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const findSchedule = await this.scheduleModel
      .find({ startsAt: { $lt: time }, status: 'pending' })
      .exec();
    return this.client.send('schedule', findSchedule).toPromise();
  }
}
