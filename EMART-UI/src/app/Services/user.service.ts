import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string='http://localhost:50605/User/'
  constructor(private http:HttpClient) {

   }
   public AddBuyer(buyer:Buyer):Observable<any>
   {
     return this.http.post<any>(this.url+'AddBuyer',JSON.stringify(buyer),Requestheaders)
   }
   public AddSeller(seller:Seller):Observable<any>
   {
     return this.http.post<any>(this.url+'AddSeller',JSON.stringify(seller),Requestheaders)
   }
   public BuyerLogin(uname:string,pwd:string):Observable<any>
   {
     return this.http.get<any>(this.url+'login/'+uname+'/'+pwd,Requestheaders)
   }
   public SellerLogin(uname:string,pwd:string):Observable<any>
   {
     return this.http.get<any>(this.url+'Slogin/'+uname+'/'+pwd,Requestheaders)
   }
}
