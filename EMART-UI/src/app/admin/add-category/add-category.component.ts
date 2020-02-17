import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
addForm:FormGroup;
submitted:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.addForm=this.formbuilder.group({
      Category_id:['',[Validators.required]],
      Category_name:['',[Validators.required]],
      Brief_details:['',[Validators.required]]

    })
  }
  get f(){
    return this.addForm.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.addForm.valid){
    alert("added succesful");
  }
}
onReset(){
  this.submitted=false;
  this.addForm.reset()
}
}
