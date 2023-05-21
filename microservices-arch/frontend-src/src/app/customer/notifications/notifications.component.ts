import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: any;

constructor(private http:HttpClient,private router:Router,private authservice: AuthServiceService,private customerService: CustomerService) { }


ngOnInit(): void {
  const customerid  =this.authservice.getCustomerId();
  console.log('customer id at notifications =',customerid);
  let response= this.http.get("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getnotifications/"+customerid);
  response.subscribe((data)=>this.notifications=data);

}
  goToHome():void{
    this.router.navigate(['/customerhome']);
  }
}
