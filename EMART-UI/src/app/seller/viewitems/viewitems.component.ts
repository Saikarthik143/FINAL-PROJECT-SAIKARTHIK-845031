import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/Services/seller.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
list:Items[];
item:Items;
itemForm:FormGroup;
category:Category;
Show:boolean=true;
  constructor(private service:SellerService,private formbuilder:FormBuilder) { 
   
  }
  Search(){
  let id=localStorage.getItem('sellerid');
  this.service.ViewItems(id).subscribe(res=>{
    this.list=res;
    console.log(this.list);


  },err=>{
    console.log(err);
  })
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
    this.Search();
  }
  Update1(){
    this.Show=!this.Show;
  }
  Update(){
    
    this.item=new Items();
      this.item.iid=(this.itemForm.value["id"]),//I+Math.floor(Math.random()*10000)
      this.item.itemName=this.itemForm.value["item_name"],
      this.item.categoryId=this.itemForm.value["CategoryId"],
      this.item.subCategoryid=this.itemForm.value["SubCategoryid"],
      this.item.description=this.itemForm.value["description"],
      this.item.price=Number(this.itemForm.value["Price"]),
      this.item.stockNumber=Number(this.itemForm.value["stock_number"]),
      this.item.remarks=this.itemForm.value["remarks"],
      this.item.sid=this.itemForm.value["Sid"],
      console.log(this.item);
      
      this.service.UpdateItems(this.item).subscribe(res=>{
        console.log('added');
        alert('Updated')
      },err=>{
        console.log(err);
      })
     
    }
    Delete(){
      let id=this.itemForm.value["id"]
      this.service.Delete(id).subscribe(res=>{
        console.log('deleted');
       
      })
    }
    View(){
      let id1=this.itemForm.value["id"];
     console.log(id1);
    this.service.GetItems(id1).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.itemForm.setValue({
        id:this.item.iid,
        CategoryId:this.item.categoryId,
        SubCategoryid:this.item.subCategoryid,
        Sid:this.item.sid,
        item_name:this.item.itemName,
        Price:this.item.price,
        description:this.item.description,
        stock_number:this.item.stockNumber,
        remarks:this.item.remarks
      })
    })
    }
}
