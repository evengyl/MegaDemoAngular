import { Component, OnInit } from '@angular/core';
import { AuthService10 } from '../demo10/services/auth.service';

@Component({
  selector: 'app-demo23',
  templateUrl: './demo23.component.html',
  styleUrls: ['./demo23.component.scss']
})
export class Demo23Component implements OnInit {

  

  constructor(private authService : AuthService10) { }

  ngOnInit(): void {
  }

}
