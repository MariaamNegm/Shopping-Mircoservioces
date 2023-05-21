import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';
import { SellingService } from 'src/app/services/selling/selling.service';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.css']
})
export class AvailableProductsComponent implements OnInit {
  products :any;
  id :number =0;

  constructor(private http:HttpClient,private router:Router,private authService:AuthServiceService,private sellService: SellingService) { }

  ngOnInit(): void {

    this.id=this.authService.getCompanyId();
    console.log('id on available_products =',this.id);

    let response= this.http.get('http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/getsaleproducts/'+this.id);
    response.subscribe((data)=>this.products=data);
  }

  goToHome():void{
    this.router.navigate(['/sellinghome']);
  }


}
