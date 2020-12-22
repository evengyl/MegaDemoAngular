import { Component, OnInit } from '@angular/core';
import { AuthService10 } from '../demo10/services/auth.service';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  authStatus : boolean = false
  statusMessage : string = ""

  

  constructor(private authService : AuthService10) { }

  ngOnInit(): void {
    this.setStatusAll()
  }

  signIn()
  {//then s'abonne a ce que la promesse va return
    this.authService.signIn().then(
      () => {   this.setStatusAll()   /*success CallBack*/ },
      () => {   this.setStatusAll()   /*reject CallBack*/ }
    )
  }

  signOut()
  {
    this.authService.signOut().then(
      () => {   this.setStatusAll()   /*success CallBack*/ },
      () => {   this.setStatusAll()   /*reject CallBack*/ }
    )
  }

  setStatusAll()
  {
    this.authStatus = this.authService.isAuth
    this.statusMessage = this.authService.statusMessage
  }

}
