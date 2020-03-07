 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
 cartlist:Cart[]
 item:Items
  
  constructor(private route:Router,private service:BuyerService) {
    let buyerid=localStorage.getItem('buyerid');
    this.service.GetCarts(buyerid).subscribe(res=>{
      this.cartlist=res;
      console.log(this.cartlist)
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {
  }
  BuyNow(item1:Items){
    console.log(this.item);
    this.item=item1,
    localStorage.setItem('item1',JSON.stringify(this.item));
    this.route.navigateByUrl('/home/buy-product');

  }
  Remove(cartid:string){
    let id=cartid;
    this.service.DeleteCart(id).subscribe(res=>{
      console.log("Item removed from the cart");
      alert('Item deleted')
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('index');
  }
}
