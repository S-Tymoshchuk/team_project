import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { SocialConnectService } from './social-connect.service';
import { IUserAuthInterface } from '../interfaces/user-auth.interface';

@Controller()
export class SocialConnectController {
  constructor(private socialConnectService: SocialConnectService) {
  }


  @MessagePattern('linkedinLogin')
  async loginLinkedin(loginLinkedin: ILinkedinConnect) {
    console.log(loginLinkedin);
    return this.socialConnectService.loginLinkedin(loginLinkedin);
  }


  @MessagePattern('userId')
  async updateUserId(userId:IUserAuthInterface) {
    return this.socialConnectService.updateUser(userId);
  }

}
