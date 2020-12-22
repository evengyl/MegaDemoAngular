import { Component, OnInit } from '@angular/core';
import { AuthService9 } from './services/auth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  authStatus : boolean;

  constructor(private authService : AuthService9) { }

  ngOnInit(): void {
    this.authStatus = this.authService.signInStatus
  }

  signIn()
  {
    this.authService.signIn()
    this.authStatus = this.authService.signInStatus
  }

  signOut()
  {
    this.authService.signOut()
    this.authStatus = this.authService.signInStatus
  }

}
