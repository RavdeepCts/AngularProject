import { PostService } from './../posts/posts.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
//   @Input() posts = [
//   {title: "", content : ""},
// ]
 posts :Post[] = [];
 private postsSub: Subscription = new Subscription;

constructor(public postsService:PostService){
  this.postsService = postsService;
  
}

ngOnInit(): void {
  this.postsService.getPosts();
  this.postsSub = this.postsService.getPostUpdateListener()
  .subscribe((posts: Post[])=>{
    this.posts = posts;
  })
}
ngOnDestroy(): void {
  this.postsSub.unsubscribe();
}
}
