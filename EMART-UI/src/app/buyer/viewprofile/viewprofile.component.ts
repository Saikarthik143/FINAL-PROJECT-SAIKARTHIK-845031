import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  EditForm:FormGroup;
  submitted:boolean;
  item:Buyer;
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.EditForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[0-9]{1,20}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createdatetime:['',[Validators.required]],
     
    })
    this.GetProfile();
  }
  GetProfile(){
    let id="E0000";
    this.service.GetProfile(id).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.EditForm.patchValue({
        Bid:this.item.bid,
        username:this.item.username,
        password:this.item.password,
        emailid:this.item.emailid,
        mobile:this.item.mobile,
        createdatetime:this.item.createdatetime,
      })
    },err=>{
      console.log(err)
    })

  }

}
