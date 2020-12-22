import { Component, OnInit } from '@angular/core';
import { ChatService } from './Services/Chat.Services'


@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrls: ['./demo17.component.scss']
})
export class Demo17Component implements OnInit {

  listMessages : string[]
  newMessage : string

  constructor(private chatService : ChatService)
  {
    chatService.Messages$.subscribe(data => this.listMessages = data)
  }

  ngOnInit(): void {
  }

  click()
  {
    this.chatService.post(this.newMessage);
    this.newMessage = null;
  }

  resetChat(){
    this.chatService.reset();
  }

}
