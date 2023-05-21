import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-customer-accounts',
  templateUrl: './list-customer-accounts.component.html',
  styleUrls: ['./list-customer-accounts.component.css']
})
export class ListCustomerAccountsComponent implements OnInit {
customer: any;
//customers:Customer[]=[];

constructor(private http:HttpClient,private router:Router,private adminService: AdminService) { }

  ngOnInit(): void {
    let response= this.http.get("http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getcustomers");
    response.subscribe((data)=>this.customer=data);
   //this.getAllcustomers();
  }

  /*
  getAllcustomers():void{
    this.adminService.getAllcustomers().subscribe(Customers=> this.customers = Customers)

  }*/

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }

}
