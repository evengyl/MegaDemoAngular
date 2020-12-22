import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  temps : number;

  timer : any;

  constructor() { }

  ngOnInit(): void {
    this.temps = 0;
  }

  start(){
    this.timer = setInterval(() => {
      this.temps++;
    }, 1000)
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.temps = 0;
    this.stop();
  }

}
