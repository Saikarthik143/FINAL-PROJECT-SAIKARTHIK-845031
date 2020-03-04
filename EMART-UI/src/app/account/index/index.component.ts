import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import { Token } from 'src/app/Models/token';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

buyer:Buyer;
seller:Seller;
loginForm:FormGroup;
submitted:boolean;
token:Token;
role:string;
  constructor(private formbuilder:FormBuilder, private service:UserService,private route:Router) { 
  
  }

  ngOnInit() {
this.loginForm=this.formbuilder.group({
  username:['',Validators.required],
  password:['',Validators.required],
  role:['']
})

  }
   public Login(){
    this.submitted=true;
     if(this.loginForm.valid)
     {
     this.token=new Token();
     this.buyer=new Buyer();
     this.seller=new Seller();
     let uname=this.loginForm.value["username"];
     let pass=this.loginForm.value["password"];
     let role=this.loginForm.value['role'];
     //Admin login
    
    
      
      //buyer login
      
       
       if(role=='buyer'){
        let token=new Token();
      this.service.BuyerLogin(uname,pass).subscribe(res=>{
      
       token=res;
        
      
      console.log(token);
      if(token.message=='success')
    {
      localStorage.setItem('buyerid',token.buyerid);
     
      this.route.navigateByUrl("home");
    }
    else {
      alert('invalid buyer');
    }
    
    });
  }
    //seller login
    if(role=='seller')
    {
      let token=new Token();
    this.service.SellerLogin(uname,pass).subscribe(res=>{
     token=res;
      console.log(token);
      if(token.message=='success')
      {
        localStorage.setItem('sellerid',token.sellerid);
        this.route.navigateByUrl("shome");
      }
      else{
        alert('invalid seller')
      }
     
    });
  }
  if(uname=="Admin" &&pass=="12345"){
     
    this.route.navigateByUrl("admin-home");
   }
     }
    // alert(this.role);
    // switch(this.role){
    //   case "buyer":
    //     this.route.navigateByUrl("home");
    //     break;
    //     case "seller":
    //     this.route.navigateByUrl("shome");
    //     break;
    //     case "admin":
    //     this.route.navigateByUrl("admin-home");
    //     break;
    //     default:
    //       alert("invalid credentials");
    // }
   
  
 
   }
  
  onSubmit(){
   
    //this.Login();
  }
  get f(){
   return this.loginForm.controls;
  }
   }
