import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService10 } from '../../demo10/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  private isAuth : boolean

  constructor(private authService : AuthService10, private route : Router){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) :
    boolean //type de retour de notre guardian
    {
      this.isAuth = this.authService.isAuth; //a été gérer par notre promesse de service10 donc pas de soucis

      if(this.isAuth)
        return true;
      else
        this.route.navigate(['/demo/demo10']); //permet de faire des redirection directement sur router
        //ici on a du mettre /demo/demo10, car oui la route c'est demo10 mais elle est enfant de demo :)
    }


  }
