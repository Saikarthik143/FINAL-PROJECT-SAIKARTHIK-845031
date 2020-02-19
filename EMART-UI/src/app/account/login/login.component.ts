import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
submitted:boolean;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.form=this.formbuilder.group({
    username:['',[Validators.required,Validators.pattern('^[A-Z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
    })
    }
    get f(){
      return this.form.controls;
    }
  onSubmit()
  {
    this.submitted=true;
    if(this.form.valid){
     
      alert("register successful")
  console.log(JSON.stringify(this.form.value));  
    }
  }
  onReset(){
    this.submitted=false;
    this.form.reset();
  }
  }
