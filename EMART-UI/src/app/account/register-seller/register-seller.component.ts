import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

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
  constructor(private formbuilder:FormBuilder,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
    
      username:['',[Validators.required,Validators.pattern('^[A-z a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[A-za-z]{7}[~!@#$%^&*()]$')]],
      companyName:['',[Validators.required,Validators.pattern('^[A-z a-z0-9]{3,20}$')]],
      gstin:['',[Validators.required,Validators.pattern('^[A-z a-z0-9]{3,10}$')]],
      briefaboutcompany:['',[Validators.required]],
      address:['',Validators.required],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]
     
    })
  }
  get f(){
    return this.registerForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.registerForm.valid)
  {

    this.seller=new Seller();
    this.seller.sid='S'+Math.round(Math.random()*1000);
    this.seller.username=this.registerForm.value["username"];
    this.seller.password=this.registerForm.value["password"];
    this.seller.companyName=this.registerForm.value["companyName"];
    this.seller.gstin=this.registerForm.value["gstin"];
    this.seller.briefaboutcompany=this.registerForm.value["briefaboutcompany"];
    this.seller.address=this.registerForm.value["address"];
    this.seller.website=this.registerForm.value["website"];
    this.seller.emailid=this.registerForm.value["emailid"];
    this.seller.mobile=this.registerForm.value["mobile"];
    console.log(this.seller);
    this.service.AddSeller(this.seller).subscribe(res=>{
      console.log('record added')
      alert('register success')
      this.route.navigateByUrl('index')
    },err=>{
      console.log(err);
    })
    
  }
    
  
  else 
   alert("invalid details");
}
onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
