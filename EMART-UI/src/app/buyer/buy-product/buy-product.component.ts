import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
paymentForm:FormGroup;
submitted:boolean;
object:Items;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.paymentForm=this.formbuilder.group({
    id:[''],
   paymenttype:[''],
    price:[''],
   cardnumber:[''],
   cvv:[''],
    date:[''],

    })
   this.object=JSON.parse( localStorage.getItem('item'))
   console.log(this.object);
   console.log(this.object.iid);
   this.paymentForm.patchValue({
     id:this.object.iid

   })
  }


}
