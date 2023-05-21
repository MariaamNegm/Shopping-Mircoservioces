import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-currentorders',
  templateUrl: './currentorders.component.html',
  styleUrls: ['./currentorders.component.css']
})
export class CurrentordersComponent implements OnInit {
  submitted = false;
  orders: any;

  constructor(private http:HttpClient,private router:Router,private authservice: AuthServiceService,private customerService: CustomerService) { }
  
  
  ngOnInit(): void {
    const customerid  =this.authservice.getCustomerId();
    console.log('customer id at current orders =',customerid);
    let response= this.http.get("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getcurrentorders/"+customerid);
    response.subscribe((data)=>this.orders=data);
  
  }
  
  goToHome():void{
    this.router.navigate(['/customerhome']);
  }

    //shayal order id
    confirmOrder(orderid:number){
      const data2= {
        
      };    

      console.log('order id at existingorder =',orderid);

      this.customerService.confirmorder(orderid,data2)
        .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          alert("order confirmed");
        },
        error => {
          console.log(error);
        });
  
    }

}
