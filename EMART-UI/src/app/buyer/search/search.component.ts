import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
itemForm:FormGroup;
list:Items[];
item:Items;
show:boolean=true;
clist:Category[];
category:string;
cart:Cart;
imagename:string;
  constructor(private route:Router, private formbuilder:FormBuilder,private service:BuyerService) {
    this.service.GetCategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
   }

  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      cartid:[''],
      id:['',[Validators.required,Validators.pattern('^[0-9]{3,8}$')]],
      CategoryId:['',[Validators.required]],
      SubCategoryid:['',[Validators.required]],
      item_name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{3,20}$')]],
      stock_number:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      remarks:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Sid:['',[Validators.required]],
      imagename:[''],
      bid:['']
    })
  }
  Show(){
    this.show=!this.show;
  }
  Search(name:string){
    
    this.service.Search(name).subscribe(res=>{
      this.list=res;
      console.log(this.list);
     
      })
    
  
  }
  BuyNow(item:Items){
    localStorage.setItem('item1',JSON.stringify(item));
    this.route.navigateByUrl('/home/buy-product');
  }
SearchByCategory(id:string){
  this.service.SearchByCategory(id).subscribe(res=>{
    this.list=res;
    console.log(this.list);

  })
}
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('index');
}
  AddtoCart(item1:Items){
    let buyerid=localStorage.getItem('buyerid');
    this.cart=new Cart();
    this.cart.cartid='C'+Math.floor(Math.random()*1000)
    this.cart.iid=item1.iid,
    this.cart.itemname=item1.itemname,
    this.cart.price=item1.price,
    this.cart.sid=item1.sid,
    this.cart.categoryid=item1.categoryid,
    this.cart.subCategoryid=item1.subCategoryid,
    this.cart.description=item1.description,
    this.cart.remarks=item1.remarks,
    this.cart.stocknumber=item1.stocknumber,
    this.cart.imagename=item1.imagename,
    this.cart.bid=buyerid
    console.log(this.cart)
    this.service.AddtoCart(this.cart).subscribe(res=>{
      console.log('added to cart');
      alert('added');
    },err=>{
      console.log(err)
    })
  
  }
}
