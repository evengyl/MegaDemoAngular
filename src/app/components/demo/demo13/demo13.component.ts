import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService13 } from './services/auth.service';
import { AuthService10 } from '../demo10/services/auth.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.scss']
})
export class Demo13Component implements OnInit {

  loginForm1 : FormGroup
  loginForm2 : FormGroup
  
  listGender : string[]

  isAuth : boolean
  statusMessage : string


  DirectLogin : string
  DirectPassword : string
  DirectGender : string

  constructor(private formBuilder : FormBuilder, private authService : AuthService13) {

    this.listGender = ["Male", "Femalle", "Other"]


    this.setStatusAll()
  }

  ngOnInit(): void {

    this.generateForm_with_FB()
    //this.generateForm_without_FB()
  }


  generateForm_with_FB() // pour des 90% des formulaires de manière générale
  {
    this.loginForm1 = this.formBuilder.group(
      {
        login : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]], //sera le FormControl login -> on devra le binder avec FormControlName
        password : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]], //sera le FormControl password -> on devra le binder avec FormControlName
        gender : [""]
        //le premier param c'est la valeur par défault, pas le placeholder, la value par défaut   
      }
    )

      //si par xemple, les données du forme doivent être pré-remplie et que c'est n'est pas possible de les remplir lors de 
      // init du form, on pourra les mettre a jour apres une promesse avec FormControl.setValue();
    this.loginForm1.controls['login'].setValue("tatat")       //le controle contient un max de possibilité a vous de voir
    //particulierement pratique pour le .invalid qui va true ou false sur le la validation
    //on peux l'appeler sur le html

    
  }


  generateForm_without_FB() //pour des form plus complexe car accès a plus d'option
  {
    this.loginForm2 = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      gender: new FormControl()
    })
  }

  submitForm()
  {
    if (this.loginForm1.valid)
    {
      let login = this.loginForm1.value.login
      let password = this.loginForm1.value.password
  
      console.log("tatat")
  
      this.authService.signIn(login, password).then(
        () => {   this.setStatusAll()   /*success CallBack*/ },
        () => {   this.setStatusAll()   /*reject CallBack*/ }
      )
    }
  }


  setStatusAll()
  {
    this.isAuth = this.authService.isAuth
    this.statusMessage = this.authService.statusMessage
  }


}
