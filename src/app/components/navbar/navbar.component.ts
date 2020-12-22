import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { AuthService10 } from '../demo/demo10/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  authStatus : boolean
  authStatusSubc : Subscription

  constructor(private authService : AuthService10) {}

  ngOnInit(): void {
    this.authStatusSubc = this.authService.statusSubject.subscribe(
      (statusAuthService) => { this.authStatus = statusAuthService}
    )
  }

}
