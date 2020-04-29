import { Injectable } from '@nestjs/common';
import { LinkedinTemplate } from './social-template/linkedin-service';

@Injectable()
export class PostTemplateService {
  constructor(private linkedinTemplate: LinkedinTemplate) {}

  async testMessage(data, post) {
    return await this.linkedinTemplate.linkedinMessage(data, post);
  }
}
