import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
SubForm:FormGroup;
submitted:boolean;
subcategory:SubCategory
  constructor(private formbuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.SubForm=this.formbuilder.group({
      SubCategoryid:['',[Validators.required]],
      SubCategoryName:['',[Validators.required]],
      CategoryId:['',[Validators.required]],
      Brief:['',[Validators.required]],
      Gst:['',[Validators.required]]
    })
  }
  get f(){
    return this.SubForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.SubForm.valid){
    this.subcategory=new SubCategory();
    this.subcategory.SubCategoryid=this.SubForm.value["SubCategoryid"];
    this.subcategory.SubCategoryName=this.SubForm.value["SubCategoryName"];
    this.subcategory.CategoryId=this.SubForm.value["CategoryId"];
    this.subcategory.Brief=this.SubForm.value["Brief"];
    this.subcategory.Gst=Number(this.SubForm.value["Gst"]);
    console.log(this.subcategory);
    this.service.AddSubCategory(this.subcategory).subscribe(res=>{
      console.log('added')
    },err=>{
      console.log(err)
    })
    alert("success");
  }
}
onReset(){
  this.submitted=false;
  this.SubForm.reset();
}
}
