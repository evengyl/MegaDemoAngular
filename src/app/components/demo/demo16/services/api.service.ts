import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs'
import { catchError } from 'rxjs/internal/operators';
import { User } from '../Models/User.model';
import { IUser } from '../Models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = "http://loicbaudoux.somee.com/api/"

  constructor(private http : HttpClient) { }

  
  getUsers(): Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.baseUrl + 'user/')
  }

  getUser(id : string) : Observable<IUser>
  {
    return this.http.get<IUser>(this.baseUrl + 'user/' + id)
  }


  postUser(user: IUser) {
    console.log(user)
    this.http.post(this.baseUrl + 'user', user).subscribe({
      next : () => console.log("mon post est passé"),
      error : () =>  console.log("Mon post n'est pas passé")
    })
  }

}
