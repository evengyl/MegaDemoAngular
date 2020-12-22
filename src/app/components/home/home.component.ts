import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  message_router : string
  
  constructor(private _router : ActivatedRoute) { }

  ngOnInit(): void {
    if(this._router.snapshot.params.message != null)
    this.message_router = this._router.snapshot.params.message
  }

}
