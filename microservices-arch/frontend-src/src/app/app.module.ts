import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { SellingloginComponent } from './sellingCompany/sellinglogin/sellinglogin.component';
import { ShippingloginComponent } from './shippingCompany/shippinglogin/shippinglogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { SellinghomeComponent } from './sellingCompany/sellinghome/sellinghome.component';
import { ShippinghomeComponent } from './shippingCompany/shippinghome/shippinghome.component';
import { CreateSellingComponent } from './admin/create-selling/create-selling.component';
import { CreateShippingComponent } from './admin/create-shipping/create-shipping.component';
import { ListCustomerAccountsComponent } from './admin/list-customer-accounts/list-customer-accounts.component';
import { ListShippingComponent } from './admin/list-shipping/list-shipping.component';
import { ListSellingComponent } from './admin/list-selling/list-selling.component';
import { AddProductComponent } from './sellingCompany/add-product/add-product.component';
import { SoldProductsComponent } from './sellingCompany/sold-products/sold-products.component';
import { AvailableProductsComponent } from './sellingCompany/available-products/available-products.component';
import { AccConfirmationComponent } from './admin/acc-confirmation/acc-confirmation.component';
import { ListordersComponent } from './shippingCompany/listorders/listorders.component';
import { AddshipLocationComponent } from './admin/addship-location/addship-location.component';
import { AllordersComponent } from './customer/allorders/allorders.component';
import { NeworderComponent } from './customer/neworder/neworder.component';
import { ExistingOrdersComponent } from './customer/existing-orders/existing-orders.component';
import { AddproductComponent } from './customer/addproduct/addproduct/addproduct.component';
import { CurrentordersComponent } from './customer/currentorders/currentorders.component';
import { PastordersComponent } from './customer/pastorders/pastorders.component';
import { NotificationsComponent } from './customer/notifications/notifications.component';
import { CustomerlogoutComponent } from './customer/customerlogout/customerlogout.component';
import { SelllogoutComponent } from './sellingCompany/selllogout/selllogout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    SellingloginComponent,
    ShippingloginComponent,
    AdminhomeComponent,
    CustomerhomeComponent,
    SellinghomeComponent,
    ShippinghomeComponent,
    CreateSellingComponent,
    CreateShippingComponent,
    ListCustomerAccountsComponent,
    ListShippingComponent,
    ListSellingComponent,
    AddProductComponent,
    SoldProductsComponent,
    AvailableProductsComponent,
    AccConfirmationComponent,
    ListordersComponent,
    AddshipLocationComponent,
    AllordersComponent,
    NeworderComponent,
    ExistingOrdersComponent,
    AddproductComponent,
    CurrentordersComponent,
    PastordersComponent,
    NotificationsComponent,
    CustomerlogoutComponent,
    SelllogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
