import { PostService } from './../posts.service';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  constructor(public postsService : PostService){

  }

  onAddPost(form :  NgForm){
    if (form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title ,form.value.content);
    form.resetForm();
  }
}
