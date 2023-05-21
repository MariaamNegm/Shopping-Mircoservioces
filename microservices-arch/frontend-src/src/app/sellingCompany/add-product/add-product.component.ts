import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product/product';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';
import { SellingService } from 'src/app/services/selling/selling.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product: Product = {
  name: '',
  image:'',
  quantity:0,
  price:0
};
id :number =0;
submitted = false;

  constructor(private sellService:SellingService, private router: Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  saveproduct(): void {

    this.id=this.authService.getCompanyId();
    console.log('id on add_product =',this.id);


    this.sellService.add_product(this.product,this.id)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['/productconfirmation']);
  }

  newproduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      image:'',
      quantity:0,
      price:0
    };
  }

  goToHome():void{
    this.router.navigate(['/sellinghome']);
  }

}
