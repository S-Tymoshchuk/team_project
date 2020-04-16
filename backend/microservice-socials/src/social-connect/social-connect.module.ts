import { Module } from '@nestjs/common';
import { SocialConnectController } from './social-connect.controller';
import { SocialConnectService } from './social-connect.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialSchema } from './Schema/social-connect.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'SocialConnect', schema: SocialSchema },])],
  controllers: [SocialConnectController],
  providers: [SocialConnectService],
})
export class SocialConnectModule {
}
