import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserViewmodelService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient){

  }

  listarUsers(): Observable<UserResponse[]>{
    return this.httpClient.get<UserResponse[]>(this.apiUrl);
  }

}
