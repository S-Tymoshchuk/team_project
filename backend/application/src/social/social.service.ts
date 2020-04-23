import { Injectable } from '@nestjs/common';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { IAutorizUseridInterface } from './interfaces/autoriz-userid.interface';

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


  public updaTeUserId(userId: IAutorizUseridInterface, {token}) {
    return this.client.send('userId', {userId,token}).toPromise();
  }
}
