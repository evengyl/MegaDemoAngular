import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo21',
  templateUrl: './demo21.component.html',
  styleUrls: ['./demo21.component.scss']
})
export class Demo21Component implements OnInit {

  translation_SayHelloFN : string

  constructor(public translation : TranslateService) {
  }

  ngOnInit(): void {
    this.translation.addLangs(["fr", "en"])
    this.translation.use("fr")
  }

  changeLang(lang : string){
    this.translation.use(lang)
  }

}
