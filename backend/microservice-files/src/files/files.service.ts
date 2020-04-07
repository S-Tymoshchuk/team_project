import { Injectable } from '@nestjs/common';


const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dpxnvu8nm',
  api_key: '929422396295967',
  api_secret: 'VOUrHOtyDo6uRY-9NSK-hvLEYvA',
});


@Injectable()
export class FilesService {
  constructor() {
  }

  async uploadFiles(files) {
    cloudinary.uploader.upload(files.buffer.data.toString('base64'), function(result) {
      console.log(result);
    });
  }
}
