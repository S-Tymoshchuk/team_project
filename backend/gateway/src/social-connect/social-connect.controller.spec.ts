import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectController } from './social-connect.controller';

describe('SocialConnect Controller', () => {
  let controller: SocialConnectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialConnectController],
    }).compile();

    controller = module.get<SocialConnectController>(SocialConnectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
