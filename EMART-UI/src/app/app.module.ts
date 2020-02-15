import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './Buyer/home/home.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { SHomeComponent } from './Seller/shome/shome.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportComponent } from './Seller/viewreport/viewreport.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    AccountComponent,
    HomeComponent,
    SearchComponent,
    ViewcartComponent,
    PurchaseHistoryComponent,
    ViewprofileComponent,
    BuyProductComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    AdminHomeComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    SHomeComponent,
    AddItemsComponent,
    ViewitemsComponent,
    ViewreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
