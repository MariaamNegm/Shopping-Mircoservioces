import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { SellingloginComponent } from './sellingCompany/sellinglogin/sellinglogin.component';
import { ShippingloginComponent } from './shippingCompany/shippinglogin/shippinglogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ShippinghomeComponent } from './shippingCompany/shippinghome/shippinghome.component';
import { SellinghomeComponent } from './sellingCompany/sellinghome/sellinghome.component';
import { CreateSellingComponent } from './admin/create-selling/create-selling.component';
import { CreateShippingComponent } from './admin/create-shipping/create-shipping.component';
import { ListCustomerAccountsComponent } from './admin/list-customer-accounts/list-customer-accounts.component';
import { ListSellingComponent } from './admin/list-selling/list-selling.component';
import { ListShippingComponent } from './admin/list-shipping/list-shipping.component';
import { AddProductComponent } from './sellingCompany/add-product/add-product.component';
import { AvailableProductsComponent } from './sellingCompany/available-products/available-products.component';
import { ConfirmationComponent } from './sellingCompany/confirmation/confirmation.component';
import { AccConfirmationComponent } from './admin/acc-confirmation/acc-confirmation.component';
import { SoldProductsComponent } from './sellingCompany/sold-products/sold-products.component';
import { ListordersComponent } from './shippingCompany/listorders/listorders.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { AddshipLocationComponent } from './admin/addship-location/addship-location.component';
import { NeworderComponent } from './customer/neworder/neworder.component';
import { ExistingOrdersComponent } from './customer/existing-orders/existing-orders.component';
import { AllordersComponent } from './customer/allorders/allorders.component';
import { CurrentordersComponent } from './customer/currentorders/currentorders.component';
import { PastordersComponent } from './customer/pastorders/pastorders.component';
import { NotificationsComponent } from './customer/notifications/notifications.component';
import { CustomerlogoutComponent } from './customer/customerlogout/customerlogout.component';
import { SelllogoutComponent } from './sellingCompany/selllogout/selllogout.component';

const routes: Routes = [

{path:'',component:RegisterComponent},
{path: "login",component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'confirmation',component:ConfirmationComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'sellinglogin',component:SellingloginComponent},
{path:'shippinglogin',component:ShippingloginComponent},
{path:'shippinghome',component:ShippinghomeComponent},
{path:'sellinghome',component:SellinghomeComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'createselling',component:CreateSellingComponent},
{path:'createshipping',component:CreateShippingComponent},
{path:'listCustomerAccounts',component:ListCustomerAccountsComponent},
{path:'listSelling',component:ListSellingComponent},
{path:'listShipping',component:ListShippingComponent},    
{path:'addProduct',component:AddProductComponent},
{path:'availableProducts',component:AvailableProductsComponent},   
{path:'soldProducts',component:SoldProductsComponent},
{path:'productconfirmation',component:ConfirmationComponent},
{path:'acc_confirmation',component:AccConfirmationComponent},  
{path:'list_all_orders',component:ListordersComponent},
{path:'customerhome',component:CustomerhomeComponent},
{path:'addlocation',component:AddshipLocationComponent}, 
{path:'neworder',component:NeworderComponent},
{path:'existingorder',component:ExistingOrdersComponent},
{path:'allorders',component:AllordersComponent},
{path:'currentorders',component:CurrentordersComponent},
{path:'pastorders',component:PastordersComponent},
{path:'notifications',component:NotificationsComponent},
{path:'customerlogout',component:CustomerlogoutComponent},
{path:'selllogout',component:SelllogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
