import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
list:Items[];

  constructor(private service:SellerService) { 
    let id="2"
    this.service.GetItems(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);


    },err=>{
      console.log(err);
    })
  }

  ngOnInit() {

  }

}
