import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserAuthenticationService {
  readonly APIUrl = "http://127.0.0.1:8000";
  private httpOptions: any;

  constructor(private http:HttpClient) { }

  loginUser(data: any): Observable<any>{
    var user = JSON.stringify(data)
    return this.http.post<any>(this.APIUrl+'/api/auth/login/',user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })
  }

  registerUser(data: any): Observable<any>{
    var newUser = JSON.stringify(data)
    console.log(newUser)
    return this.http.post<any>(this.APIUrl+'/api/auth/register/', newUser, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    })
  }
}
