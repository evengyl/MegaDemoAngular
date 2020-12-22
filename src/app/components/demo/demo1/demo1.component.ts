import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
})
export class Demo1Component implements OnInit {

  maVariable : string = "Hello Worlds!";
  maVariable2 : number = 15;
  maVariable3 : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
