import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    console.log("invoke login  service",user)
    return this.http.post(`${this.apiUrl}/auth/login`, user);
  }

  register(user: User): Observable<any> {
    console.log("invoke register service",user)
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  getUsers(page:number,perPage:number) {
      return this.http.get<Data>(`${this.apiUrl}/auth/list?page=${page}&perPage=${perPage}`);
  }

}