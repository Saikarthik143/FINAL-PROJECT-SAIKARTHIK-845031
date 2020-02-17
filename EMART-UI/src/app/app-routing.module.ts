import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { HomeComponent } from './Buyer/home/home.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SHomeComponent } from './Seller/shome/shome.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportComponent } from './Seller/viewreport/viewreport.component';
import { CreatebuyerComponent } from './createbuyer/createbuyer.component';
import { IndexComponent } from './account/index/index.component';
import {ContactComponent} from './account/contact/contact.component';



const routes: Routes = [
  
    {path:'login',component:LoginComponent},
    {path:'register-buyer',component:RegisterBuyerComponent},
    {path:'register-seller',component:RegisterSellerComponent},
    {path:'createbuyer',component:CreatebuyerComponent},
    {path:'index',component:IndexComponent},
    {path:'contact',component:ContactComponent},
  
    {path:'admin-home',component:AdminHomeComponent,children:[
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-sub-category',component:AddSubCategoryComponent},
    
    {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
    {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
    {path:'daily-report',component:DailyReportComponent},
  ]},
    {path:'home',component:HomeComponent,children:[
      {path:'search',component:SearchComponent},
      {path:'viewcart',component:ViewcartComponent},
      {path:'viewprofile',component:ViewprofileComponent},
      {path:'buy-product',component:BuyProductComponent},
      {path:'purchase-history',component:PurchaseHistoryComponent}  
  ]},
  {path:'shome',component:SHomeComponent,children:[
    {path:'add-items',component:AddItemsComponent},
    {path:'viewitems',component:ViewitemsComponent},
    {path:'viewprofile',component:ViewprofileComponent},
    {path:'viewreport',component:ViewreportComponent}
  ]},
  {path:'',redirectTo:'index',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
