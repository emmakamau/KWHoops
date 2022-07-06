import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

declare var loadExtJS: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css'],
  providers: [UserAuthenticationService]
})
export class UserAuthenticationComponent implements OnInit {

  // public userSignInForm: FormGroup

  constructor(private service:UserAuthenticationService) { }

  register; 
  login;

  ngOnInit(): void {
    new loadExtJS();

      this.register = {
        username:'',
        email:'',
        password:''
      };

      this.login = {
        email:'',
        password:''
      }
  }

  registerUser(){
    this.service.registerUser(this.register).subscribe(response => {
      alert('User'+this.register.username+'has been created')
    },
    error => console.log('error', error)
    );
  }

  loginUser(){
    this.service.loginUser(this.login).subscribe(response => {
      alert('User'+this.login.username+'has been signed in')
    },
    error => console.log('error', error)
    );
  }
}
