import { Test, TestingModule } from '@nestjs/testing';
import { PostTemplateService } from './post-template.service';

describe('PostTemplateService', () => {
  let service: PostTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostTemplateService],
    }).compile();

    service = module.get<PostTemplateService>(PostTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
