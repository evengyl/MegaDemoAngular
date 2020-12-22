import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  AbstractControl, Validators} from '@angular/forms';

import { LoginValidator } from './Utils/Validators/LoginValidator';
import { PasswordValidator } from './Utils/Validators/PasswordValidator';
import { DateValidator } from './Utils/Validators/DateValidator';


@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})


export class Demo14Component implements OnInit
{

  loginForm : FormGroup


  constructor(private formBuilder : FormBuilder) {
    this.generateForm();
  }

  ngOnInit(): void {

    console.log(this.loginForm);

  }


  generateForm()
  {


    this.loginForm = this.formBuilder.group({
      login : [null, [Validators.required, LoginValidator]],
      password : [null, [Validators.required, PasswordValidator]],
      date : [null, [Validators.required, DateValidator]],
    })
  }


  

  onSubmit()
  {
    if (this.loginForm.valid)
    {
      //form ok on peux travailler nos services et tout
    }
    else
    {
      //on peux travailler les erreurs, dans la validation du formualaire également
      alert(this.loginForm.controls.age.errors['errorsMessage'])
    }
    
  }


  toStatus(value : AbstractControl)
  {
    if(value.pristine)
      return 'info'
    
    if(value.valid)
      return 'success'

    return 'danger'
  }
}