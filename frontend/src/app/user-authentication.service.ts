import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface user{
  username?:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  readonly APIUrl = "http://127.0.0.1:8000";
  private httpOptions: any;

  constructor(private http:HttpClient) {
    this.httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe:'body'
  }
  }

  loginUser(data: user): Observable<any>{
    // var user = JSON.stringify(data)
    // console.log(user)
    return this.http.post<any>(this.APIUrl+'/api/auth/login/',data)
  }

  registerUser(data:user){
    return this.http.post<any>(this.APIUrl+'/api/auth/register/', data)
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