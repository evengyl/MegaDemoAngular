import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBackEndService {

  private baseUrl : string = "http://localhost:3100"

  constructor(private httpClient : HttpClient) { }

  getAllcountries() : Observable<any[]>
  {
    return this.httpClient.get<any[]>(this.baseUrl + "/api/films/")
  }

}
