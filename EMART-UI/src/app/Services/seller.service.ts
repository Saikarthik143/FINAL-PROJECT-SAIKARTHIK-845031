import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Items } from '../Models/items';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:50605/Item/'
  url1:string='http://localhost:50605/Seller/'
  constructor(private http:HttpClient) { }
  public AddItem(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItems',JSON.stringify(item),Requestheaders)
  }
  public GetItems(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetItem/'+id,Requestheaders)
  }
  public GetProfile(id:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url1+'Get/'+id,Requestheaders);
  }
  public EditProfile(id:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'Edit',id,Requestheaders);
  }
  public UpdateItems(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Update',items,Requestheaders);
  }
  public GetAllCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'GetAllCategories',Requestheaders);
  }
  public ViewItems(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'View/'+id,Requestheaders);
  }
  public GetSubCategory(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetSubCategory/'+id,Requestheaders);
  }
  public Delete(id:string):Observable<any>{
    return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders);
  }
  public GetReports(sid:string):Observable<any>{
    return this.http.get<any>(this.url1+'GetReports/'+sid,Requestheaders)
  }
}
