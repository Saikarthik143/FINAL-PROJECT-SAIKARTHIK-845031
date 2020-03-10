import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
count:number;
username:string;
  constructor(private route:Router,private service:BuyerService) {
    if(localStorage.getItem('buyerid'))
    {
      this.username=localStorage.getItem('username');
      console.log(this.username);
      let bid=localStorage.getItem('buyerid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count);
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
