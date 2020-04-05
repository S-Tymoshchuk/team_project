import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreateUserDto, ILoginUserDto } from './dto/create-user.dto';

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

  public register(createUserDto: CreateUserDto) {
    return this.client.send<string, CreateUserDto>('register', createUserDto);
  }

  public login(loginUserDto: ILoginUserDto) {
    return this.client.send('login', loginUserDto);
  }

  public forgotPassword(email) {
    return this.client.send('forgotPassword', email);
  }

}
