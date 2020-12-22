import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()   _colorDefineInParent : string 
  //je veux que ce soit le parent que gère ça, mais que ça soit afficher dans l'enfant
//en gros le input permet de passer des propriété d'un compo a un autre par selecteur
  @Input() _messageIntroByParent : string


  @Output()  OutputParent: EventEmitter<boolean>
  //Nous voulons maintenant que nos parents obtiennent des données provenant de notre enfant.

  @Output()  messageToEmit: EventEmitter<string>
  messageForParent : string = "Bonjour chère parents"



  constructor() {
    this.OutputParent = new EventEmitter<boolean>();
    this.messageToEmit = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  changeInParent(status: boolean) {
    this.OutputParent.emit(status)
  }

  sendMessageToParent(message : string)
  {
    this.messageToEmit.emit(message)
  }

}
