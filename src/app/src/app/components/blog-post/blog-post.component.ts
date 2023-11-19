import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  imports: [CommonModule, CommentsComponent, NgOptimizedImage],
})
export class BlogPostComponent {}
