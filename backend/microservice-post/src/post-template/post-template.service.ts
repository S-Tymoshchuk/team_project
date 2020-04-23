import { Injectable } from '@nestjs/common';
import { linkedinMessage } from './social-template/linkedin';

@Injectable()
export class PostTemplateService {

  async testMessage(data, post) {
   return  await linkedinMessage(data, post);
  }
}
