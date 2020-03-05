 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
 
  img:string;
  selectedFile:File=null;
  constructor() { }

  ngOnInit() {
  }
//   On(event){
//     this.selectedFile=<File>event.target.files[0]
//   }
//   onUpload(){
//     const fd=new FormData();
//     fd.append('image',this.selectedFile,this.selectedFile.name)
//   this.http.post('url',fd);
//   }
// }
// }
}
