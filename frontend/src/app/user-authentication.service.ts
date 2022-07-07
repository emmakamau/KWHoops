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
}

/*
 authenticateUserWithServer(loginCredentials): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`${environment.BASE_URL}login`, loginCredentials)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));

                this.userSubject.next(user);
                return user;
            }));
    }

*/