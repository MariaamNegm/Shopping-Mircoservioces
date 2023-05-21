import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shippingcompany } from 'src/app/model/shippingcompany/shippingcompany';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-create-shipping',
  templateUrl: './create-shipping.component.html',
  styleUrls: ['./create-shipping.component.css']
})
export class CreateShippingComponent implements OnInit {

  shippingcompany: Shippingcompany = {
    name: '',
  };
  submitted = false;
  

  constructor(private adminServie: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  saveshippingcompany(): void {

    const data= {
      name: this.shippingcompany.name,
    };
  
    this.adminServie.createshipping(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          
        },
        error => {
          console.log(error);
        });
  }

  newshippingcompany(): void {
    this.submitted = false;
    this.shippingcompany = {
      name: '',
    };
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }

  goToListshipping():void{
    this.router.navigate(['/listShipping']);
  }
  

}
