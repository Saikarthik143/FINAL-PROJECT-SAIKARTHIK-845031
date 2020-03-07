import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/Services/seller.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

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

  constructor(private route:Router  ,private service:SellerService,private formbuilder:FormBuilder) { 
   
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
      categoryid:['',[Validators.required]],
      SubCategoryid:['',[Validators.required]],
      itemname:['',[Validators.required,Validators.pattern('^[a-z A-Z0-9]{3,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[a-z A-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{3,20}$')]],
      stocknumber:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      remarks:['',[Validators.required,Validators.pattern('^[a-z A-Z0-9]{0,80}$')]],
      Sid:['',[Validators.required]],
      imagename:['',[Validators.required]]
    })
    this.Search();
  }
  Update1(){
    this.Show=!this.Show;
  }
  Update(){
    
    this.item=new Items();
    let sid=localStorage.getItem('sellerid')
      this.item.iid=(this.itemForm.value["id"]),//I+Math.floor(Math.random()*10000)
      this.item.itemname=this.itemForm.value["itemname"],
      this.item.categoryid=this.itemForm.value["categoryid"],
      this.item.subCategoryid=this.itemForm.value["SubCategoryid"],
      this.item.description=this.itemForm.value["description"],
      this.item.price=Number(this.itemForm.value["Price"]),
      this.item.stocknumber=Number(this.itemForm.value["stocknumber"]),
      this.item.remarks=this.itemForm.value["remarks"],
      this.item.sid=sid,
      this.item.imagename=this.itemForm.value["imagename"]
      console.log(this.item);
      
      this.service.UpdateItems(this.item).subscribe(res=>{
        console.log('added');
        alert('Updated')
      },err=>{
        console.log(err);
      })
     
    }
    Delete(id:string){
     
      this.service.Delete(id).subscribe(res=>{
        console.log('deleted');
        alert('deletd')
       
      })
    }
    View(id:string){
      let id1=id;
     console.log(id1);
    this.service.GetItems(id1).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.itemForm.patchValue({
        id:this.item.iid,
       categoryid:this.item.categoryid,
       SubCategoryid:this.item.subCategoryid,
        Sid:this.item.sid,
        itemname:this.item.itemname,
        Price:this.item.price,
        description:this.item.description,
        stocknumber:this.item.stocknumber,
        remarks:this.item.remarks,
        imagename:this.item.imagename
      })
    })
    }
    Logout(){
      localStorage.clear();
      this.route.navigateByUrl('index');
    }
}
