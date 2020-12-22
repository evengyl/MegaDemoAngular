import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService{

  private hub : signalR.HubConnection
  public Messages$: BehaviorSubject<string[]>;

  constructor() { 

    this.Messages$ = new BehaviorSubject<string[]>(null);

    this.hub = new signalR.HubConnectionBuilder().withUrl('http://loicbaudoux.somee.com/ChatHub').build();


          //on étant la "methode" subscribe de signalR
      //refresh etant la méthode déclancheuse (callback) attention c'est ma nomination dans mon api core...
      //en gros ici on s'abonne a refresh, qui dans l'api, nous permettra de définir un peu a quel abonné sur que lméthode
      this.hub.on("Refresh", 
      (data) => { this.Messages$.next(data) }
    )

    
    this.hub.start().then(
        () => { this.hub.invoke("GetAll"); }, //ici j'invoke la méthode getAll de mon api
        () => { } //pas de retour négatif de la promesse, soyer créatif
      );
    


  }

  public post(item)
  {
    this.hub.invoke("Post", item);
  }

  public reset()
  {
    this.hub.invoke("Reset")
  }


}
