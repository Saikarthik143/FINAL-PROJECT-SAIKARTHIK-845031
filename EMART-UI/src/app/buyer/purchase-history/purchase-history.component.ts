import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/Models/purchase';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
list:Purchase[];
  constructor(private service:BuyerService,private route:Router) {
    let bid=localStorage.getItem('buyerid');
    this.service.PurchaseHistory(bid).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
   
   }

  ngOnInit() {

  }
  View(id:string){
    this.service.PurchaseHistory(id).subscribe(res=>{

    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('index');
  }
}
