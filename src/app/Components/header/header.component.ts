import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../Services/user-authentication.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;

  constructor(private authService: UserAuthenticationService) {

  }

  ngOnInit(): void {
    //this.isUserLogged = this.authService.isUserLogged;
    this.authService.GetLoggedStatus().subscribe(status => {
      this.isUserLogged = status
    })
  }

}
