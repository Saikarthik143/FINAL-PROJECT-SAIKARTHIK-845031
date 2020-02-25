import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
registerForm:FormGroup;
submitted:boolean;
list:Seller[];
seller:Seller;
  constructor(private formbuilder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Sid:['',Validators.required],
      username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      brief:['',[Validators.required]],
      address:['',Validators.required],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
     
    })
  }
  get f(){
    return this.registerForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.registerForm.valid){
    this.seller=new Seller();
    this.seller.Sid=this.registerForm.value["Sid"];
    this.seller.Username=this.registerForm.value["username"];
    this.seller.Password=this.registerForm.value["password"];
    this.seller.CompanyName=this.registerForm.value["companyname"];
    this.seller.Gstin=this.registerForm.value["Gstin"];
    this.seller.Briefaboutcompany=this.registerForm.value["brief"];
    this.seller.Address=this.registerForm.value["address"];
    this.seller.Website=this.registerForm.value["website"];
    this.seller.Emailid=this.registerForm.value["emailid"];
    this.seller.Mobile=this.registerForm.value["mobile"];
    console.log(this.seller);
    this.service.AddSeller(this.seller).subscribe(res=>{
      console.log('record added')
    },err=>{
      console.log(err);
    })
    alert("register success");
    
  }
  else 
  alert("invalid details")
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
