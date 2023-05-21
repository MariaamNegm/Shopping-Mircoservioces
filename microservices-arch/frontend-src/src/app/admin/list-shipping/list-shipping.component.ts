import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shippingcompany } from 'src/app/model/shippingcompany/shippingcompany';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-shipping',
  templateUrl: './list-shipping.component.html',
  styleUrls: ['./list-shipping.component.css']
})
export class ListShippingComponent implements OnInit {
  shippingcompany: any;
  

  constructor(private http:HttpClient,private router:Router,private adminService: AdminService) { }

ngOnInit(): void {
  let response= this.http.get("http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getshipcompanies");
  response.subscribe((data)=>this.shippingcompany=data);
  
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }



}
