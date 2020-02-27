import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/Services/seller.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Editform:FormGroup;
  submitted:boolean;
  item:Seller
  constructor(private formbuilder:FormBuilder,private service:SellerService) {
    
    //console.log(this.item);
   }

  ngOnInit() {
    this.Editform=this.formbuilder.group({
      Sid:['',Validators.required],
      Username:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
      Password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      CompanyName:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,10}$')]],
      Briefaboutcompany:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Address:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Emailid:['',[Validators.required,Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      Website:['',Validators.required]

    })
    this.GetProfile();
  }
  get f(){
    return this.Editform.controls;
  }
onSubmit(){
  this.submitted=true;
  
  }
GetProfile(){
  let id="3";
    this.service.GetProfile(id).subscribe(res=>{
     this.item=res;
     console.log(this.item);
     this.Editform.patchValue({
      Sid:this.item.sid,
      Username:this.item.username,
      Password:this.item.password,
      CompanyName:this.item.companyName,
      Gstin:this.item.gstin,
      Briefaboutcompany:this.item.briefaboutcompany,
      Address:this.item.address,
      Emailid:this.item.emailid,
      Mobile:this.item.mobile,
      Website:this.item.website
    })
    },err=>{
      console.log(err)
    })
    
}

onReset(){
  this.submitted=false;
  this.Editform.reset();
}
}