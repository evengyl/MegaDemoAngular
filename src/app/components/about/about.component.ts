import { Component, OnInit } from '@angular/core';
import { AuthService13 } from '../demo/demo13/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor(private authService : AuthService13) { }

  ngOnInit(): void {
  }

  rageQuit()
  {
    this.authService.signOut();
  }

}
