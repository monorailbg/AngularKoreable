import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    const mobileMenu = () => {
      menu?.classList.toggle('is-active'); //Optional Chaining
      menuLinks?.classList.toggle('active');
    };

    menu?.addEventListener('click', mobileMenu);
  }

  login(): void {
    const dialog = this.dialog.open(LoginComponent);
  }

  signup(): void {
    const dialog = this.dialog.open(SignupComponent, {height: "50%"});
  }

}
