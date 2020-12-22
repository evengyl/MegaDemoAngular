import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService13 } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDemo13Guard implements CanActivate {

  isAuth : boolean
  constructor(private authService : AuthService13, private route : Router) {
      
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    this.isAuth = this.authService.isAuth; 

      if(this.isAuth)
        return true;
      else
        this.route.navigate(['/demo/demo13']); 
  }
  
}
