import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  EditForm:FormGroup;
  submitted:boolean;
  item:Buyer;
  show:boolean;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { 
    if(localStorage.getItem('buyerid'))
    {}
    else 
    {
      alert(' please login in first');
      this.route.navigateByUrl('index');
    }
  }

  ngOnInit() {
    this.EditForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[0-9]{1,20}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createdatetime:['',[Validators.required]],
     
    })
    this.GetProfile();
  }
  EditProfile(){
    this.item=new Buyer();
    this.item.bid=this.EditForm.value["Bid"];
    this.item.username=this.EditForm.value["username"];
    this.item.password=this.EditForm.value["password"];
    this.item.emailid=this.EditForm.value["emailid"];
    this.item.mobile=this.EditForm.value["mobile"];
    console.log(this.item)
    this.service.EditProfile(this.item).subscribe(res=>{
      alert('updated');
      console.log('added');
    })
  }
  GetProfile(){
    let id=localStorage.getItem('buyerid');
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
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('index');
  }
}
