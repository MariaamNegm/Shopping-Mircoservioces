import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product/product';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-existing-orders',
  templateUrl: './existing-orders.component.html',
  styleUrls: ['./existing-orders.component.css']
})
export class ExistingOrdersComponent implements OnInit {

  orders: any;
  customerid :number = 0;
  productid :number = 0;

  submitted = false;
  
  constructor(private authservice:AuthServiceService,private http:HttpClient,private router:Router,private customerService: CustomerService) { }
  
  
  ngOnInit(): void {  

    this.customerid  =this.authservice.getCustomerId();
    this.productid=this.customerService.getproductId();
    let response= this.customerService.get_current_orders_bycustomer(this.customerid);
    response.subscribe((data)=>this.orders=data);
  
  }
  
  goToHome():void{
    this.router.navigate(['/customerhome']);
  }
  
  //shayal order id
  selectOrder(orderid:number){
    const data2= {
      
    };    

    const productid=this.customerService.getproductId();

    console.log('order id at existingorder =',orderid);
    console.log('product id at existingorder =',productid);

    this.customerService.add_product_to_order(orderid,productid,data2)
      .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        
      },
      error => {
        console.log(error);
      });

  }

}
