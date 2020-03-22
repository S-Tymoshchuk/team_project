import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get('/:id')
  getPostId(@Param('id') id: string) {
    return this.postsService.getPostId(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Posts {
    return this.postsService.createPost(createPostDto);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    this.postsService.deletePost(id);
  }
}
