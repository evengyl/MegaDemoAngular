import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestNodeService {

  private baseUrl : string = "http://localhost:3000"
  //ici on fourni pas l'adresse du serveur car on va directement intéragir avec le yun
  
  test : Observable<any>

  constructor(private _client : HttpClient) {  }

  public ToggleON(PinID : number) : Observable<any>
  {
    this.test  =  this._client.get<any>(this.baseUrl + "/api/control/activatePin" )
    console.log(this.test);
    return this.test
  }

  public ToggleOFF(PinID : number) : Observable<any>
  {
    this.test  =  this._client.get<any>(this.baseUrl )
    console.log(this.test);
    return this.test
  }

}
