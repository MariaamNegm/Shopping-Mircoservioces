import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.css']
})
export class PastordersComponent implements OnInit {

  orders: any;

constructor(private http:HttpClient,private router:Router,private authservice: AuthServiceService,private customerService: CustomerService) { }


ngOnInit(): void {
  const customerid  =this.authservice.getCustomerId();
  console.log('customer id at past orders =',customerid);
  let response= this.http.get("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getpastorders/"+customerid);
  response.subscribe((data)=>this.orders=data);

}
  goToHome():void{
    this.router.navigate(['/customerhome']);
  }

}
