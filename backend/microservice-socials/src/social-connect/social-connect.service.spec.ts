import { Test, TestingModule } from '@nestjs/testing';
import { SocialConnectService } from './social-connect.service';

describe('SocialConnectService', () => {
  let service: SocialConnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialConnectService],
    }).compile();

    service = module.get<SocialConnectService>(SocialConnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
