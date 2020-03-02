import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';
import { Items } from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted:boolean;
  item:Items;
  categorylist:Category[];
  subcat:SubCategory[];
  constructor(private formbuilder:FormBuilder,private service:SellerService) {
    this.service.GetAllCategories().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })
    
   }
   
  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      
      CategoryId:['',[Validators.required]],
      SubCategoryid:[''],
      item_name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{3,20}$')]],
      stock_number:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      remarks:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]],
      Sid:['',[Validators.required]]

    })
   
  }
get f(){
  return this.itemForm.controls;
}
onSubmit()
{
  this.submitted=true;
  this.item=new Items();
  this.item.subCategoryid=this.itemForm.value["SubCategoryid"],
  console.log(this.item.subCategoryid);
  if(this.itemForm.valid){
    this.item=new Items();
    this.item.iid='I'+Math.floor(Math.random()*10000)
    this.item.itemName=this.itemForm.value["item_name"],
    this.item.categoryId=this.itemForm.value["CategoryId"],
    this.item.subCategoryid=this.itemForm.value["SubCategoryid"],
    this.item.description=this.itemForm.value["description"],
    this.item.price=Number(this.itemForm.value["Price"]),
    this.item.stockNumber=Number(this.itemForm.value["stock_number"]),
    this.item.remarks=this.itemForm.value["remarks"],
    this.item.sid=this.itemForm.value["Sid"],
    console.log(this.item);
    
    this.service.AddItem(this.item).subscribe(res=>{
      console.log('added');
      
    },err=>{
      console.log(err);
    })
   
    alert("register successful")
  
  }
}
GetSubCategory()
   {
    let id=this.itemForm.value["CategoryId"]
     this.service.GetSubCategory(id).subscribe(res=>{
       this.subcat=res;
       console.log(this.subcat)
     })
   }



onReset(){
  this.submitted=false;
  this.itemForm.reset();
}
}
