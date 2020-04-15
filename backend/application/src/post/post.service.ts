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

  public uploadFiles(files) {
    return this.client.send('uploadFiles', files).toPromise();
  }

  public removeFiles(file) {
    return this.client.send('removeFile', file).toPromise();
  }

  public addPost(id) {
    return this.client.send('addPost', id).toPromise();
  }

}
