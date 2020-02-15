import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
registerForm:FormGroup;
submitted:boolean;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Sid:['',Validators.required],
      username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      brief:['',[Validators.required]],
      address:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      acceptTerms:[false,Validators.requiredTrue]
    })
  }
  get f(){
    return this.registerForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.registerForm.valid){
    alert("register success");
    console.log(JSON.stringify(this.registerForm.value)); 
  }
  else 
  alert("invalid details")
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
