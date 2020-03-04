import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import  {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:50605/Buyer/'

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
  public GetItems():Observable<any>{
    return this.http.get<any>(this.url+'GetItems',Requestheaders);
  }
}
