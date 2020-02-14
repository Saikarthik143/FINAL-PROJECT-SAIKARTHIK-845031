import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[E][0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z][a-z]{3-20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createdatetime:['',[Validators.required]],
      acceptTerms:[false,Validators.requiredTrue]
    })

    
  }
  get f(){
    return this.registerForm.controls;
  }
onSubmit()
{
  this.submitted=true;
  if(this.registerForm.valid){
   
    alert("register successful")
console.log(JSON.stringify(this.registerForm.value));  
  }
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
