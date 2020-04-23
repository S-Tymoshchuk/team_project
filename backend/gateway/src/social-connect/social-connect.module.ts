import { Module } from '@nestjs/common';
import { SocialConnectController } from './social-connect.controller';
import { SocialConnectService } from './social-connect.service';

@Module({
  imports:[],
  controllers:[SocialConnectController],
  providers:[SocialConnectService]
})
export class SocialConnectModule {}
