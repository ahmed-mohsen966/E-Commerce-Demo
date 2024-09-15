import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenticationService } from '../Services/user-authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(UserAuthenticationService);
  const router = inject(Router)
  if(authService.isUserLogged){
    return true
  }else{
    alert("Please login first.");
    router.navigate(["/Login"]);
    return false;
  }
};
