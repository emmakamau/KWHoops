import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';

declare var loadExtJS: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {

  public userSignInForm: FormGroup

  constructor(
    private service:UserAuthenticationService) { }


  ngOnInit(): void {
    new loadExtJS();

    
  }
}
