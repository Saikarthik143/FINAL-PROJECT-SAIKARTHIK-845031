import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
itemForm:FormGroup;
list:Items;
item:Items;
  constructor(private route:Router, private formbuilder:FormBuilder,private service:BuyerService) {
    // this.service.GetItems().subscribe(res=>{
    //   this.list=res;
    //   console.log(this.list);
    // })
   }

  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{3,8}$')]],
      CategoryId:['',[Validators.required]],
      SubCategoryid:['',[Validators.required]],
      item_name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{3,20}$')]],
      stock_number:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      remarks:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Sid:['',[Validators.required]]
    })
  }
  Search(name:string){
    
    this.service.Search(name).subscribe(res=>{
      this.list=res;
      console.log(this.list);
     
      }

      )
    
  
  }
  BuyNow(item:Items){
    localStorage.setItem('item',JSON.stringify(item));
    this.route.navigateByUrl('/home/buy-product');
  }

}
