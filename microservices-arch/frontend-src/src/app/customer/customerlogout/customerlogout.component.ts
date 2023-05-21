import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-customerlogout',
  templateUrl: './customerlogout.component.html',
  styleUrls: ['./customerlogout.component.css']
})
export class CustomerlogoutComponent implements OnInit {
  id:number =0;
  data :any
  constructor(private http:HttpClient,private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id=this.authService.getCustomerId();
    console.log('sellid in logout',this.id);

    this.authService.customerlogout(this.data,this.id)
    .subscribe(
      response => {
        console.log(response);
        alert("sucessfully logout");
        
      },
      error => {
        console.log(error);
      });
      this.router.navigate(['/login']);
 }

}
