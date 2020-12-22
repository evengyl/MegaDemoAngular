import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  maVar1 : string = "salut les gens !";
  maVar2 : number = 150;
  maVar3 : Date = new Date();

  
  constructor() { }

  ngOnInit(): void {
  }

}
