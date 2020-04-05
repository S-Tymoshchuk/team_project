import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces/post.interface';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class PostService {
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

  public createPost(contentPost: IPost) {
    return this.client.send<string, IPost>('createPost', contentPost).toPromise();
  }
}
