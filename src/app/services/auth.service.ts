import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  authUser(userName:string, password:string){
    return this.http.post(this.apiUrl+'Account/login', {
      userName: userName,
      password: password
    });
  }
}
