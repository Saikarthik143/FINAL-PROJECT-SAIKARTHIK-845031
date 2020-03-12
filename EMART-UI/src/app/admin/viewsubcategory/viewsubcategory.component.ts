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
  Delete(Scid:string){
    this.service.DeleteSubCategory(Scid).subscribe(res=>{
      alert('Subcategory was deleted successfully');
    })
  }
  Update(){
    this.subcategory=new SubCategory();
    this.subcategory.subCategoryid=this.viewform.value["subcategoryid"],
    this.subcategory.subCategoryName=this.viewform.value["subcategoryname"],
    this.subcategory.categoryid=this.viewform.value["categoryid"],
    this.subcategory.brief=this.viewform.value["brief"],
    this.subcategory.gst=Number(this.viewform.value["gst"]),
    console.log(this.subcategory);
    this.service.UpdateSubcategory(this.subcategory).subscribe(res=>{
      console.log('record updated'),
      alert('record update')
    },err=>{
      console.log(err)
    })
  }
  Edit(edit:SubCategory){
    console.log(edit);
    this.subcategory=edit;
    console.log(this.subcategory);
    this.viewform.patchValue({
      subcategoryid:this.subcategory.subCategoryid,
      subcategoryname:this.subcategory.subCategoryName,
      categoryid:this.subcategory.categoryid,
      brief:this.subcategory.brief,
      gst:this.subcategory.gst
    })
  }

}
