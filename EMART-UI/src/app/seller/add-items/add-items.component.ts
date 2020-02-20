import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted:boolean;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{3,8}$')]],
      Category_id:['',[Validators.required]],
      SubCategoryid:['',[Validators.required]],
      item_name:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,20}$')]],
      Price:['',[Validators.required,Validators.pattern('^[1-9][0-9]{0,20}$')]],
      stock_number:['',[Validators.required,Validators.pattern('^[0-9]{0,20}$')]],
      remarks:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{0,80}$')]]

    })
  }
get f(){
  return this.itemForm.controls;
}
onSubmit()
{
  this.submitted=true;
  if(this.itemForm.valid){
   
    alert("register successful")
console.log(JSON.stringify(this.itemForm.value));  
  }
}
onReset(){
  this.submitted=false;
  this.itemForm.reset();
}
}
