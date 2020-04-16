import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SocialConnectService } from './social-connect.service';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';

@Controller()
export class SocialConnectController {
  constructor(private socialConnectService: SocialConnectService) {
  }

  @MessagePattern('loginLinkedin')
  async loginLinkedin(loginLinkedin: ILinkedinConnect) {
    console.log(loginLinkedin);
    return this.socialConnectService.createLinkedin(loginLinkedin);
  }

}
