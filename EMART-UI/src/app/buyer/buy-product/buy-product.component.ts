import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
paymentForm:FormGroup;
submitted:boolean;
object:Cart;
purchase:Purchase;
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
    this.paymentForm=this.formbuilder.group({
    id:[''],
   paymenttype:['',Validators.required],
    
   cardnumber:['',[Validators.required,Validators.pattern('^[0-9]{16}$')]],
   cvv:['',[Validators.required,Validators.pattern('^[0-9]{3}$')]],
    date:[''],
    numberofitems:['',[Validators.required,Validators.pattern('^[0-9]$')]],
    remarks:['']

    })
   this.object=JSON.parse(localStorage.getItem('item1'))
   console.log(this.object);
   console.log(this.object.iid);
   this.paymentForm.patchValue({
     id:this.object.iid

   })
  }
Buy(){
  this.submitted=true;
 if(this.paymentForm.valid)
 {
  this.purchase=new Purchase();
  this.purchase.id='P'+ Math.floor(Math.random()*1000),
  this.purchase.iid=this.object.iid,
  this.purchase.transactiontype=this.paymentForm.value["paymenttype"],
  this.purchase.sid=this.object.sid,
  this.purchase.bid=localStorage.getItem('buyerid'),
  this.purchase.datetime=new Date();
  this.purchase.numberofitems=Number(this.paymentForm.value["numberofitems"]),
  this.purchase.remarks=this.paymentForm.value["remarks"],
  console.log(this.purchase)
  this.service.BuyItem(this.purchase).subscribe(res=>{
    console.log('payment success')
    alert("payment success")
    this.Remove()
  },err=>{
    console.log(err)
  })
 }
}
Remove(){
  console.log(this.object.cartid)
  let id=this.object.cartid
  
  this.service.DeleteCart(id).subscribe(res=>{
    console.log("Item removed from the cart");
    alert('Item deleted')
  })
}
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('index');
}
get f(){
  return this.paymentForm.controls;
}
}
