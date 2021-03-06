import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGetterService {

  constructor(private http: HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
