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
  isLoggedIn: any; 

  constructor(private service: UserAuthenticationService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.service.isLoggedIn;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
