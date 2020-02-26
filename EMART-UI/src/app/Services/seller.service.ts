import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:50605/Item/'
  constructor(private http:HttpClient) { }
  public AddItem(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItems',JSON.stringify(item),Requestheaders)
  }
}
