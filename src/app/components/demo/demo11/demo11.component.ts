import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //notre page ne pourra être affichée que si notre guard nous l'autorise, ce qui veux dire que ça ce gère du coté route
  }

}
