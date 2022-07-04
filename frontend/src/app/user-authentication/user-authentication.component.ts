import { Component, OnInit } from '@angular/core';

declare var loadExtJS: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new loadExtJS();
  }

}
