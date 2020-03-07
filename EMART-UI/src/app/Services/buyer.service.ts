import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Purchase } from '../Models/purchase';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:50605/Buyer/'
  url1:string='http://localhost:50605/Item/'
 

  constructor(private http:HttpClient) { }
  public GetProfile(id:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'Get/'+id,Requestheaders);
  }
  public EditProfile(id:Buyer):Observable<Buyer>
  {
    return this.http.put<any>(this.url+'Edit',id,Requestheaders);
  }
  public Search(name:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItems/'+name,Requestheaders)
  }
  public SearchByCategory(id:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItemByCategory/'+id,Requestheaders)
  }
  public SearchBySubCategory(id:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItemBySubCategory'+id,Requestheaders)
  }
  public GetItems():Observable<any>{
    return this.http.get<any>(this.url+'GetItems',Requestheaders);
  }
  public GetItemById(id:string):Observable<any>{
    return this.http.get<any>(this.url1+'GetItem/'+id,Requestheaders);
  }
  public BuyItem(purchase:Purchase):Observable<any>{
    return this.http.post<any>(this.url+'BuyItem',purchase,Requestheaders)
  }
  public GetCategory():Observable<any>{
    return this.http.get<any>(this.url+'GetCategory',Requestheaders);
  }
  public PurchaseHistory(buyerid:string):Observable<any>{
    return this.http.get<any>(this.url+'View/'+buyerid,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.url+'AddtoCart',cart,Requestheaders);
  }
  public DeleteCart(id:string):Observable<any>{
    return this.http.delete<any>(this.url+'DeleteCart/'+id,Requestheaders);
  }
  public GetCarts(bid:string):Observable<any>{
    return this.http.get<any>(this.url+'GetCart/'+bid,Requestheaders);
  }
}
