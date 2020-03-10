import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/Services/seller.service';
import { Purchase } from 'src/app/Models/purchase';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {
plist:Purchase[];
  constructor(private route:Router,private service:SellerService) {
    if(localStorage.getItem('sellerid'))
    {
      let sid=localStorage.getItem('sellerid');
      this.service.GetReports(sid).subscribe(res=>{
        this.plist=res;
        console.log(this.plist);
      })
    }
    else 
    {
      alert(' please login in first');
      this.route.navigateByUrl('index');
    }
   }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('index');
  }
}
