import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../Services/user-authentication.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {
isUserLogged: boolean = false;
  constructor(private authService: UserAuthenticationService) { }

  ngOnInit() {
    this.isUserLogged = this.authService.isUserLogged;
  }

  Login(){
    this.authService.login('username' , 'password');
    this.isUserLogged = this.authService.isUserLogged;

  }

  Logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;

  }


}
