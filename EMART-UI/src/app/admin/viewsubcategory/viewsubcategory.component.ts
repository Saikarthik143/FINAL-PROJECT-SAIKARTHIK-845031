import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {
sublist:SubCategory[];
viewform:FormGroup;
subcategory:SubCategory
  constructor(private service:AdminService,private formbuilder:FormBuilder) {
    this.service.GetSubCategory().subscribe(res=>{
      this.sublist=res;
      console.log(this.sublist);
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {
    this.viewform=this.formbuilder.group({
      subcategoryid:['',],
      subcategoryname:['',],
      categoryid:['',],
      brief:['',],
      gst:['',]
      
    })


  }
  

}
