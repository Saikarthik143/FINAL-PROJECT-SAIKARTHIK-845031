import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';
import { Items } from 'src/app/Models/items';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted:boolean;
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:SellerService) { }

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
get f(){
  return this.itemForm.controls;
}
onSubmit()
{
  this.submitted=true;
  if(this.itemForm.valid){
    this.item=new Items();
    this.item.iid=(this.itemForm.value["id"]),
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
onReset(){
  this.submitted=false;
  this.itemForm.reset();
}
}
