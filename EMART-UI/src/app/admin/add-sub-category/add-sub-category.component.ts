import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
SubForm:FormGroup;
submitted:boolean
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.SubForm=this.formbuilder.group({
      SubCategoryid:['',[Validators.required]],
      SubCategoryName:['',[Validators.required]],
      Category_id:['',[Validators.required]],
      Brief:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]$')]],
      Gst:['',[Validators.required,Validators.pattern('^[0-9]$')]]
    })
  }
  get f(){
    return this.SubForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.SubForm.valid){
    alert("success");
  }
}
onReset(){
  this.submitted=false;
  this.SubForm.reset();
}
}
