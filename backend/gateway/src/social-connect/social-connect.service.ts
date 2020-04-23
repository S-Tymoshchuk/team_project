import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { IUserAuthInterface } from '../interfaces/user-auth.interface';

@Injectable()
export class SocialConnectService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8881,
      },
    });
  }

  public loginLinkedin(loginLinkedin: ILinkedinConnect) {
    return this.client.send('loginLinkedin', loginLinkedin).toPromise();
  }

  public named(name) {
    return this.client.send('name', name).toPromise();
  }

  public updateUser(userId:IUserAuthInterface) {
    return this.client.send('userId', userId).toPromise();
  }
}
