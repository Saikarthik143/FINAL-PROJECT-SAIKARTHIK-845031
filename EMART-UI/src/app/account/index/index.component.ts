import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';

import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
uname:string;
pass:string;
buyer:Buyer;
seller:Seller;
loginForm:FormGroup;
msg:string;
  constructor(private formbuilder:FormBuilder, private service:UserService,private route:Router) { 
  
  }

  ngOnInit() {
this.loginForm=this.formbuilder.group({
  username1:[''],
  password1:['']
})

  }
   public Login(){
     if(this.uname=="Admin" && this.pass=="12345"){
       this.route.navigateByUrl('admin-home');
     }
     else {
       alert("invalid");
     }
      this.buyer=new Buyer();
      
       this.uname=this.loginForm.value["username1"];
       this.pass=this.loginForm.value["password1"];
       console.log(this.uname);
       console.log(this.pass);
      this.service.BuyerLogin(this.uname,this.pass).subscribe(res=>{
        this.buyer=res;
        console.log(this.buyer)
      // if(this.buyer.username==this.uname && this.buyer.password==this.pass)
      if(this.msg=="sucess")
      {
        alert('Login success');
       this.route.navigateByUrl('/home');
      }
      else{
        alert('Invalid Credentials');
      }
    })
  }
}
