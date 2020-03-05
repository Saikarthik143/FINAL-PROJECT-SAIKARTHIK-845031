import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:50605/Admin/'
  constructor(private http:HttpClient) { }
  public AddCategory(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',JSON.stringify(category),Requestheaders)
  }
  public AddSubCategory(subcategory:SubCategory):Observable<any>
  {
      return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(subcategory),Requestheaders);
  }
  public GetCategory():Observable<any>{
    return this.http.get<any>(this.url+'GetAll',Requestheaders)
  }
}
