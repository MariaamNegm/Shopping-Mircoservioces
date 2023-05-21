import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/model/location/location';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addship-location',
  templateUrl: './addship-location.component.html',
  styleUrls: ['./addship-location.component.css']
})
export class AddshipLocationComponent implements OnInit {

  submitted = false;
   id: any;
   location : Location = {
    name : '',
   }


  constructor(private adminServie: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }

  saveshippingcompany(): void {

    const data= {
      name: this.location.name,
    };
  
    this.adminServie.addlocation(data,this.id)
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
    this.location= {
      name: '',
    };
  }

}
