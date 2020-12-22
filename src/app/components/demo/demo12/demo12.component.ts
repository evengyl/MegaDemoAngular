import { Component, OnInit } from '@angular/core';

import { User } from './Models/user.model';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})

export class Demo12Component implements OnInit {

  listUser : User[] = []
  user : User
  
  constructor() {

    this.user = new User()
    this.user.firstname = "Loic"
    this.user.lastname = "Baudoux"
    this.user.email = "loic.baudoux@bstorm.be",
    this.user.films = ["star wars", "matrix", "le seigneur des anneaux"]
    this.listUser.push(this.user)


    this.user = new User()
    this.user.firstname = "Chuck"
    this.user.lastname = "norris"
    this.user.email = "chuck.norris@infinite.be",
    this.user.films = ["Me", "Moi", "& encore Me"]
    this.listUser.push(this.user)


   }

  ngOnInit(): void {
  }

}
