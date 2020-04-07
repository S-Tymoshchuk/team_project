import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class FilesService {
  private client: ClientProxy;


  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8880,
      },
    });
  }

  async uploadFiles(files) {
    return this.client.send('uploadFiles', files);
  }
}
