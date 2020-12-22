import { Injectable } from '@angular/core';
import { Demo13Component } from '../../demo13/demo13.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService9 {

  signInStatus : boolean
  
  
  constructor()
  { 
    this.signInStatus = false;
  }

  signIn()
  {
      this.signInStatus = true;
  }

  signOut()
  {
    this.signInStatus = false;
  }
}
