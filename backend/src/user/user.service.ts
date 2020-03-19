import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { UserLogin } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
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

  public login(createUserDto: CreateUserDto) {
    return this.client.send<string, CreateUserDto>('login', createUserDto);
  }
}
