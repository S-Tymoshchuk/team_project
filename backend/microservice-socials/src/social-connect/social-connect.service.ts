import { Injectable } from '@nestjs/common';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocialConnect } from './interfaces/social-connect.interfac';
import { IUserAuthInterface } from './interfaces/user-auth.interface';

@Injectable()
export class SocialConnectService {
  constructor(@InjectModel('SocialConnect') private socialConnect: Model<SocialConnect>) {
  }

  async createLinkedin(loginLinkedin: ILinkedinConnect) {
    const createSocConnect = new this.socialConnect(loginLinkedin);
    return await createSocConnect.save();
  }

  async updateUserId(userId: IUserAuthInterface) {
    return this.socialConnect.updateOne(
      { accessToken: userId.token },
      { $set: { authorizId: userId.userId } },
    );
  }
}
