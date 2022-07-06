import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  registerUser(userData): Observable<any>{
    return this.http.post(this.APIUrl+'/api/auth/register/',userData)
  }

  loginUser(userData): Observable<any>{
    return this.http.post(this.APIUrl+'/api/auth/login/',userData)
  }
}
