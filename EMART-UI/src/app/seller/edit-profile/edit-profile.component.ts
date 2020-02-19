import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Editform:FormGroup;
  submitted:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.Editform=this.formbuilder.group({
      Sid:['',Validators.required],
      username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      brief:['',[Validators.required]],
      address:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      
    })
  }
  get f(){
    return this.Editform.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.Editform.valid){
    alert("register success");
    console.log(JSON.stringify(this.Editform.value)); 
  }
  else 
  alert("invalid details")
}
onReset(){
  this.submitted=false;
  this.Editform.reset();
}
}