import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { User } from './Models/User.model';
import { IUser } from './Models/IUser.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiBackEndService } from './services/api-back-end.service';
import { TestNodeService } from './services/test-node.service';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.scss']
})
export class Demo16Component implements OnInit {

  userList : User[] = []
  userUniq : User

  userForm : FormGroup
  


  idToGet : number
  
  obsInput$ : any
  errorMessage : string 


  listCountries : any


  constructor(private testNodeS : TestNodeService, private apiService : ApiService, private formBuilder : FormBuilder, private ApiBE : ApiBackEndService){ }

  ngOnInit(): void
  {

    this.getUsers()

    //this.idToChange().subscribe(data => this.getContact(data))

    this.initForm();

    
  }

  onChange(){
    this.getUser(this.idToGet.toString())
  }


  initForm()
  {
    this.userForm = this.formBuilder.group({
      lastName : ["test", [Validators.required]],
      firstName : ["momo", [Validators.required]],
      password : ["test=1234", [Validators.required]],
      email : ["test@momo.be", [Validators.required]]
    })
  }
  

//get all
  getUsers()
  {
    this.apiService.getUsers().subscribe(
      (resp: IUser[]) => {
        next : this.userList = resp
        error : this.errorMessage = "Il s'est produit une erreur sur le getPosts"
    });
  }

//getOne
  getUser(id : string)  
  {
    this.apiService.getUser(id).subscribe(
        (data: IUser) => this.userUniq = data,
        (error) =>  this.errorMessage = "Il s'est produit une erreur sur le getPost"
      );
  }

  postUser(): void
  {

    const UserCreated = new User()
    UserCreated.lastName =this.userForm.value.lastName
    UserCreated.firstName =this.userForm.value.firstName
    UserCreated.password =this.userForm.value.password
    UserCreated.email =this.userForm.value.email

    this.apiService.postUser(UserCreated)
  }


}
