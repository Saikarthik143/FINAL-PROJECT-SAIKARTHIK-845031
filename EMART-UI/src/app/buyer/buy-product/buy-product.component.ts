import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
paymentForm:FormGroup;
submitted:boolean;
object:Items;
purchase:Purchase;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
    this.paymentForm=this.formbuilder.group({
    id:[''],
   paymenttype:[''],
    
   cardnumber:[''],
   cvv:[''],
    date:[''],
    numberofitems:[''],
    remarks:['']

    })
   this.object=JSON.parse( localStorage.getItem('item'))
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
  this.purchase.datetime=this.paymentForm.value["date"],
  this.purchase.numberofitems=Number(this.paymentForm.value["numberofitems"]),
  this.purchase.remarks=this.paymentForm.value["remarks"],
  console.log(this.purchase)
  this.service.BuyItem(this.purchase).subscribe(res=>{
    console.log('payment success')
  },err=>{
    console.log(err)
  })
 }
}
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('index');
}
}
