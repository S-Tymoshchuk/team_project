import { Injectable } from '@nestjs/common';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class SocialService {
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

  public loginLinkedin(linkedinConnect: ILinkedinConnect) {

    return this.client.send('linkedinLogin', linkedinConnect).toPromise();
  }

  public named(name) {
    return this.client.send('name', name).toPromise();
  }
}
