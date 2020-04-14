import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { IAttachmentResult } from 'src/post/interfaces/attachment-result';
import { IFileRemoveInterface } from './interface/file-remove.interface';


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
    try {
      return this.client.send('uploadFiles', files);
    } catch (e) {
      throw new e;
    }
  }

  // async createAttachment(postId){
  //   return this.client.send('createAttachment', postId)
  // }

  async attachmentSend(param: IAttachmentResult) {
    return this.client.send('attachmentSend', param).toPromise();
  }

  async removeFiles(file: IFileRemoveInterface) {
    return this.client.send('removeFile', file).toPromise();
  }

}
