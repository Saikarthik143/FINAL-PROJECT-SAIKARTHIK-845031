import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean;
  buyer:Buyer;
  list:Buyer[]

  constructor(private formbuilder:FormBuilder,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      
      username:['',[Validators.required,Validators.pattern('^[A-Z a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createdatetime:['',[Validators.required]],
      
    })

    
  }
  get f(){
    return this.registerForm.controls;
  }
onSubmit()
{
  this.submitted=true;
  if(this.registerForm.valid){
    this.buyer=new Buyer() 
    this.buyer.bid='B'+Math.round(Math.random()*1000);
    this.buyer.username=this.registerForm.value["username"];
    this.buyer.password=this.registerForm.value["password"];
    this.buyer.emailid=this.registerForm.value["emailid"];
    this.buyer.mobile=this.registerForm.value["mobile"];
    this.buyer.createdatetime=this.registerForm.value["createdatetime"];
    console.log(this.buyer);
    this.service.AddBuyer(this.buyer).subscribe(res=>{
      console.log('record added')
      alert('register success')
      this.route.navigateByUrl('index');
    },err=>{
      console.log(err);
    })

   
   

  }
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
