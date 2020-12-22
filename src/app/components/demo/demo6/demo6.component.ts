import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  maVar1 : string
  maVar2 : number 
  maVar3 : boolean


  constructor() { }

  ngOnInit(): void {
  }

}
