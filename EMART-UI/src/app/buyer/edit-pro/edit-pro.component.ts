import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  EditForm:FormGroup;
  submitted:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.EditForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[E][0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createdatetime:['',[Validators.required]],
     
    })

    
  }
  get f(){
    return this.EditForm.controls;
  }
onSubmit()
{
  this.submitted=true;
  if(this.EditForm.valid){
   
    alert("register successful")
console.log(JSON.stringify(this.EditForm.value));  
  }
}
onReset(){
  this.submitted=false;
  this.EditForm.reset();
}
}