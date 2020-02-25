import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Buyer } from 'src/app/Models/buyer';
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

  constructor(private formbuilder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[E][0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,20}$')]],
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
    this.buyer.Bid=this.registerForm.value["Bid"];
    this.buyer.Username=this.registerForm.value["username"];
    this.buyer.Password=this.registerForm.value["password"];
    this.buyer.Emailid=this.registerForm.value["emailid"];
    this.buyer.Mobile=this.registerForm.value["mobile"];
    this.buyer.Createdatetime=this.registerForm.value["createdatetime"];
    console.log(this.buyer);
    this.service.AddBuyer(this.buyer).subscribe(res=>{
      console.log('record added')
    },err=>{
      console.log(err);
    })

   
    alert("register successful")

  }
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
