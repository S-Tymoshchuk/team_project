import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ILoginUserDto, IUser } from './interfaces/user.interface';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8878,
      },
    });
  }
  register(user: IUser) {
    return this.client.send('register', user).toPromise();
  }

  login(user: ILoginUserDto) {
    return this.client.send('login', user).toPromise();
  }

  auth(email:string) {
    return this.client.send('forgotPassword', email).toPromise();
  }
}
