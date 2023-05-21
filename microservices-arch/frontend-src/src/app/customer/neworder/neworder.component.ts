import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order/order';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {
  order: Order = {
    name: '',
  };
  submitted = false;

  constructor(private customerservice: CustomerService,private router:Router,private authservice:AuthServiceService) { }

  ngOnInit(): void {
  }

  saveorder(): void {
    const data= {
      name: this.order.name,
    };


    const customerid  =this.authservice.getCustomerId();
    const productid=this.customerservice.getproductId();

    console.log('customer id at neworder =',customerid);
    console.log('product id at new order =',productid);
    this.customerservice.create_order(data,customerid)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          //this.customerservice.add_product_to_order(customerid,productid,data2);
        },
        error => {
          console.log(error);
        });
        alert("order created");
  }

  neworder(): void {
    this.submitted = false;
    this.order = {
      name: '',
    };
  }

  goToAllOrders(){this.router.navigate(['/allorders']);}
  goToHome(){this.router.navigate(['/customerhome']);}

}
