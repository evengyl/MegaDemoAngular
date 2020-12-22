import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService10 {

  isAuth : boolean = false
  statusMessage : string

  statusSubject = new Subject<boolean>()

  constructor() { }


  emitStatusAuth()
  {
    this.statusSubject.next(this.isAuth)
  }

  signIn()
  {
    return new Promise(
      (success, denied) => {
         
        this.isAuth = true; //simule la connexion a un service de connection, pour l'exemple
        setTimeout(() =>
        {
          
          this.emitStatusAuth()

          if(this.isAuth){
            this.statusMessage = "Succès, vous avez bien été connecté"
            success()
          }

          else{
            this.statusMessage = "Denied, vous n'avez pas été connecté correctement"
            denied()
          }

        }, 1500)

      }
    )
  }




  signOut()
  {
    return new Promise(
      (success, denied) => {
         
        this.isAuth = false;  //simule la connexion a un service de connection, pour l'exemple
        setTimeout(() =>
        {
          this.emitStatusAuth()

          if(!this.isAuth){
            this.statusMessage = "Succès, vous avez bien été déconnecté correctement"
            success()
          }
            
            

          else{
            this.statusMessage = "Denied, vous n'avez pas été déconnecté"
            denied()
          }

        }, 1500)

      }
    )
  }
}
