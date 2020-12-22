import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CountriesValidators } from './Validators/Countries.validator'; 


@Component({
  selector: 'app-demo22',
  templateUrl: './demo22.component.html',
  styleUrls: ['./demo22.component.scss']
})
export class Demo22Component implements OnInit {


  countryForm : FormGroup

  constructor(private httpClient: HttpClient, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.countryForm = this.fb.group(
      {
        Pays : ['', Validators.required, CountriesValidators.checkCountry(this.httpClient)]
      }
    )
  }

}
