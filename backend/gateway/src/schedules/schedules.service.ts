import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ISchedule } from 'src/post/interfaces/schedule.interface';

@Injectable()
export class SchedulesService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8882,
      },
    });
  }

  createSchedul(scheduleData) {
    return this.client.send('createSchedule', scheduleData).toPromise();
  }
}
