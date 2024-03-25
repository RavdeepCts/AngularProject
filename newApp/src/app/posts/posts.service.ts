import { Injectable } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subject } from "rxjs";

@Injectable({providedIn : 'root'})
export class PostService {
    private posts : Post[] =[];
    private postUpdated = new Subject<Post[]>();
    getPosts(){
        return [...this.posts];
    }
    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    addPost(title:string,content:string){
        const post : Post = {
            title: title,
            content : content
        };
        this.posts.push(post);
        this.postUpdated.next([...this.posts])
    }
}