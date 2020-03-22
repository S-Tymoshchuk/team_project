import { Injectable } from '@nestjs/common';
import { Posts } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';
import * as uuid from 'uuid/v1';

@Injectable()
export class PostsService {
  private posts: Posts[] = [];

  getAllPosts(): Posts[] {
    return this.posts;
  }

  getPostId(id) {
    return this.posts.find(post => post.id === id);
  }

  createPost(createPostDto: CreatePostDto) {
    const { name, title, body } = createPostDto;
    const post: Posts = {
      id: uuid(),
      name,
      title,
      body,
    };
    this.posts.push(post);
    return post;
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
