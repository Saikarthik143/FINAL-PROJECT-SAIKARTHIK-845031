import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {
username:string;
  constructor(private route:Router) {
    if(localStorage.getItem('sellerid'))
    {}
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
