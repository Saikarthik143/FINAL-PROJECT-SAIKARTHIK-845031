import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  Editform:FormGroup;
  submitted:boolean;
  item:Seller
  constructor(private formbuilder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.Editform=this.formbuilder.group({
      Sid:['',Validators.required],
      username:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,10}$')]],
      brief:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      address:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
  })
}
  onSubmit(){
    this.submitted=true;
    let id="1"
    this.service.GetProfile(id).subscribe(res=>{
     this.item=res;
     console.log(this.item)
     this.Editform.setValue({
       Sid:this.item.sid,
       username:this.item.username,
       password:this.item.password,
       companyname:this.item.companyName,
       Gstin:this.item.gstin,
       brief:this.item.briefaboutcompany,
       address:this.item.address,
       emailid:this.item.emailid,
       mobile:this.item.mobile
     })
    },err=>{
      console.log(err)
    })
  }

GetProfile(){
 
}
}