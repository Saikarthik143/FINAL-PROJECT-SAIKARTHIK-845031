import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
addForm:FormGroup;
submitted:boolean;
category:Category;


  constructor(private formbuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addForm=this.formbuilder.group({
      CategoryId:['',[Validators.required]],
      CategoryName:['',[Validators.required]],
      BriefDetails:['',[Validators.required]]

    })
  }
  get f(){
    return this.addForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.addForm.valid){
    this.category=new Category();
    this.category.categoryId=this.addForm.value["CategoryId"];
    this.category.categoryName=this.addForm.value["CategoryName"];
    this.category.briefDetails=this.addForm.value["BriefDetails"];
    console.log(this.category);
    this.service.AddCategory(this.category).subscribe(res=>{
      console.log('record added')
    },err=>{
      console.log(err)
    })
    alert("added succesful");
  }
}
onReset(){
  this.submitted=false;
  this.addForm.reset()
}
}
