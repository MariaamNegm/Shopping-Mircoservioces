import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sellingcompany } from 'src/app/model/sellingcompany/sellingcompany';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-create-selling',
  templateUrl: './create-selling.component.html',
  styleUrls: ['./create-selling.component.css']
})
export class CreateSellingComponent implements OnInit {
  sellincompany: Sellingcompany = {
    username: '',
  };
  submitted = false;
  
  constructor(private adminServie: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  savesellingcompany(): void {
    const data= {
      username: this.sellincompany.username,
    };
  
    this.adminServie.createselling(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newsellingcompany(): void {
    this.submitted = false;
    this.sellincompany = {
      username: '',
    };
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }

  goToListselling():void{
    this.router.navigate(['/listSelling']);
  }

}
