import { Module } from '@nestjs/common';
import { PostTemplateService } from './post-template.service';

@Module({
  providers: [PostTemplateService],
})
export class PostTemplateModule {
}
