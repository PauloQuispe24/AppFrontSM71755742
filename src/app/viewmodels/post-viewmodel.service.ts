import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostResponse } from '../models/post-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostViewmodelService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient){

  }

  listarPosts(): Observable<PostResponse[]>{
    return this.httpClient.get<PostResponse[]>(this.apiUrl);
  }

}
