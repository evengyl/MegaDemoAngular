import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService13 {

  isAuth : boolean = false
  statusMessage : string

  //fake list auth

  loginList : any

  constructor(private route : Router) {
    this.loginList = [
      { login : "evengyl", password : "test" },
      { login : "loic", password : "test" },
      { login : "test", password : "test" },
    ]
  }

  signIn(login : string, password : string)
  {
    return new Promise(
      (success, denied) => {
         
        this.isAuth = this.verifyLogin(login, password)


        setTimeout(() =>
        {
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
        this.isAuth = false;  //simule la connexion a un service de connection, pour l'exemple
        this.route.navigate(["/home/Vous êtes déconnecté"])

  }


  verifyLogin(login, password)
  {
    let status = false

    if(this.loginList.some(item => item.login === login))
    {
      if(this.loginList.some(item => item.password === password))
          return true
      else
        return false
    } 
    
    else
      return false
  }
}
