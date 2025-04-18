import { CanActivateFn ,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import{AuthService} from './auth.service'
import{inject} from '@angular/core'
export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  let token = localStorage.getItem('token');
  if (token) {
    return false;
  }

  else{
    return true;
  }

};
