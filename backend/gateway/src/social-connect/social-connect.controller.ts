import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { SocialConnectService } from './social-connect.service';

@Controller()
export class SocialConnectController {
  constructor(private socialConnectService: SocialConnectService) {
  }


  @MessagePattern('linkedinLogin')
  async loginLinkedin(loginLinkedin: ILinkedinConnect) {
    console.log(loginLinkedin);
    return this.socialConnectService.loginLinkedin(loginLinkedin);
  }

  @MessagePattern('name')
  async named(name){
    return this.socialConnectService.named(name)
  }

}
