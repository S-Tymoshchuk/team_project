import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { IPost } from './interfaces/post.interface';

@Injectable()
export class PostService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8879,
      },
    });
  }

  createPost(contentPost: IPost) {
    return  this.client.send<string, IPost>('createPost', contentPost).toPromise();
  }
}
