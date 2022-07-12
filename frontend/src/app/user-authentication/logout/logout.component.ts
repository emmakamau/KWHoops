import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: UserAuthenticationService) { }

  ngOnInit(): void {
  }

}
