import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{
  error = new Subject<string>()
  constructor(private http: HttpClient){}
  createAndStore(title: string, content: string) {
    //...
    const postData: Post = {
      title,
      content
    }
    this.http.post<{ name: string }>('https://ng-complete-guide-29ff7.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData)
    },
    error => {
      this.error.next(error.message)
    }
    )
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-29ff7.firebaseio.com/posts.json')
  }
  fetchPosts() {
    return this.http.get<{[key: string]: Post }>('https://ng-complete-guide-29ff7.firebaseio.com/posts.json')
    .pipe(map((responseData) => {
      const postArray:Post[] = []
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({ ...responseData[key], id: key })
        }
      }
      return postArray
    }), 
      catchError(errorRes => {
        // send to ann=alytics server
        return throwError(errorRes)
      })
    )
  }
}