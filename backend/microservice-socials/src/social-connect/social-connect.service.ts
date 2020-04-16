import { Injectable } from '@nestjs/common';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocialConnect } from './interfaces/social-connect.interfac';

@Injectable()
export class SocialConnectService {
  constructor(@InjectModel('SocialConnect') private socialConnect: Model<SocialConnect>) {
  }

  async createLinkedin(loginLinkedin: ILinkedinConnect) {
    console.log(loginLinkedin);
    const createSocConnect = new this.socialConnect(loginLinkedin);
    return await createSocConnect.save();
  }
}
