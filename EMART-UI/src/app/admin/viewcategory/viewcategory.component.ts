import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  categorylist:Category[];
  viewform:FormGroup;
  category:Category;
  constructor(private service:AdminService,private formbuilder:FormBuilder) 
  {
    this.service.GetCategory().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {
    this.viewform=this.formbuilder.group({
      categoryid:['',],
 categoryname:['',],
 briefdetails:['']
    })
   

  }

  Edit(edit:Category)
  {
    console.log(edit);
    this.category=edit;
    console.log(this.category);
    this.viewform.patchValue({
      categoryid:this.category.categoryid,
      categoryname:this.category.categoryname,
      briefdetails:this.category.briefdetails,
    })
  }
  Delete(id:string){
    this.service.DeleteCategory(id).subscribe(res=>{
      alert('category was deleted successful');
    })
  }

}
