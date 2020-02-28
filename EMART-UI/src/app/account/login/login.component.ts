import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
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

username:string;
password:string;
  constructor(private formbuilder:FormBuilder, private service:UserService,private route:Router) { }

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
      this.buyer=new Buyer();
      this.seller=new Seller();
      if(this.username=='Admin'&&this.password=="12345")
      {
            this.route.navigateByUrl('admin-home');
      }
    this.service.BuyerLogin(this.username,this.password).subscribe(res=>{
      this.buyer=res;
    },err=>{
      console.log(err)
    })
    if(this.buyer.username==this.username && this.buyer.password==this.password){
      this.route.navigateByUrl('home')
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
