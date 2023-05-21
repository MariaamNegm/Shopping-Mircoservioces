import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';
import { SellingService } from 'src/app/services/selling/selling.service';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.css']
})
export class SoldProductsComponent implements OnInit {
products: any;
id :number =0;

constructor(private http:HttpClient,private router:Router,private authService:AuthServiceService,private sellService: SellingService) { }

  ngOnInit(): void {
    
  this.id=this.authService.getCompanyId();
  console.log('id on sold_products =',this.id);
  
  let response2=this.sellService.getAllsoldproducts(this.id);
  response2.subscribe((data)=>this.products=data);
  }

  goToHome():void{
    this.router.navigate(['/sellinghome']);
  }

}
