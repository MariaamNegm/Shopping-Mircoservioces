import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  
  products: any;
  constructor(private http:HttpClient,private router:Router,private customerService: CustomerService) { }
  
  
  ngOnInit(): void {
    let response= this.customerService.get_available();
    response.subscribe((data)=>this.products=data);
  }

   //shayal product id
  addToOrder(id: number){
    console.log('productid on customerhome =',id);
    this.customerService.setproductId(id);
    this.router.navigate(['/existingorder']);
  }

  goToallorders(){
    this.router.navigate(['/allorders']);
  }
  goToneworders(){
    this.router.navigate(['/neworder']);
  }
  goTopastorders(){
    this.router.navigate(['/pastorders']);
  }
  goTocurrentorders(){
    this.router.navigate(['/currentorders']);
  }
  goTonotifications(){
    this.router.navigate(['/notifications']); 
  }
  goTologout(){
    this.router.navigate(['/customerlogout']);
  }

  
}
