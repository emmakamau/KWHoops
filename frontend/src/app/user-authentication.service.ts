import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  signInUser(){
    return this.http.get<any>(this.APIUrl + '/api/auth/login/');
  }
}
