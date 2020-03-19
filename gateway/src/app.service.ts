import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }
  login(createUserDto: CreateUserDto) {
    return this.client.send('login', createUserDto);
  }
}
