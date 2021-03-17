import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsService } from '../services/credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth:CredentialsService, private router:Router){

  }

  /* La pantalla de credenciales se vera simpre y caundo el usuario no esté logeado */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl('auth');
      return false;
    }
  }
  /* Las rutas hijas seran accesibles simpre y caundo el uaurio esté logeado */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl('');
      return false;
    }
  }
  
}
