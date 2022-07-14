import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from 'src/app/user-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuOpen: boolean = false;

  constructor(public service: UserAuthenticationService) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  loggedOut(){
    localStorage.clear()
  }

}
