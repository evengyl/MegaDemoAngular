import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  nb1 : number = 0
  nb2 : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increaseNB1()
  {
    this.nb1 ++
  }

  increaseNB2()
  {
    this.nb2 ++
  }

  decreaseNB1()
  {
    this.nb1 --
  }

  decreaseNB2()
  {
    this.nb2 --
  }


  resetNB1()
  {
    this.nb1 = 0
  }


  resetNB2()
  {
    this.nb2 = 0
  }

}
