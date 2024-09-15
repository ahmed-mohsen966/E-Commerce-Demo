import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private isLoggedsubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedsubject = new BehaviorSubject<boolean>(false);
  }

  login(username: string, password: string) {
    let token = "ygyrri73777fgkfhfsd";
    localStorage.setItem("Token", token);
    this.isLoggedsubject.next(true);
  }

  logout() {
    localStorage.removeItem("Token");
    this.isLoggedsubject.next(false);
    }
  get isUserLogged(): boolean {
    return localStorage.getItem("Token") ? true : false;
  }

  GetLoggedStatus(){
    return this.isLoggedsubject.asObservable();
  }

}
