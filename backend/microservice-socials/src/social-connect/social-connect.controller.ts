import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SocialConnectService } from './social-connect.service';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { IUserAuthInterface } from './interfaces/user-auth.interface';

@Controller()
export class SocialConnectController {
  constructor(private socialConnectService: SocialConnectService) {
  }

  @MessagePattern('loginLinkedin')
  async loginLinkedin(loginLinkedin: ILinkedinConnect) {
    return this.socialConnectService.createLinkedin(loginLinkedin);
  }

  @MessagePattern('userId')
  async updateId(userId:IUserAuthInterface) {
    return this.socialConnectService.updateUserId(userId);
  }
}
