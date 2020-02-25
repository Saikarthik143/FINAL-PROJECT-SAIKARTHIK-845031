import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
submitted:boolean;
buyer:Buyer;
seller:Seller;
list:Buyer[];
list1:Seller[];
user:string;
pwd:string;
  constructor(private formbuilder:FormBuilder, private service:UserService) { }

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
      if(this.user=='Admin'&&this.pwd=="12345"){

      }
    

     
      alert("register successful")
  console.log(JSON.stringify(this.form.value));  
    }
  }
  onReset(){
    this.submitted=false;
    this.form.reset();
  }
  }
