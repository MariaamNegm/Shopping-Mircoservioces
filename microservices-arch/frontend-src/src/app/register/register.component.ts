import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Admin } from '../model/admin/admin';
import { AuthServiceService } from '../services/login/auth-service.service';
import { Customer } from '../model/customer/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent  implements OnInit {

    customer: Customer = {
      username: '',
      password:'',
      location:''
    };
    submitted = false;

    constructor(private authService:AuthServiceService, private router: Router) { }
    ngOnInit(): void {
    }

   goToSignUp(): void{
    this.router.navigate(['/register']);
  }

  goToSignIn(): void{
    this.router.navigate(['/login']);
  }
  loginUser2(user:any){
     
    if(user.password != null && user.email != null)
      {
      this.router.navigate(['/login']);
      alert("Registered sucessfully");
    }
    else if(user.email == null || user.password == null)
    {  
      alert("enter username & password");
    }
  }

  savecustomer(): void {

    const data= {
      username: this.customer.username,
      password:this.customer.password,
      location:this.customer.location
    };
  
    this.authService.register(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          
        },
        error => {
          console.log(error);
        });
  }

  newcustomer(): void {
    this.submitted = false;
    this.customer = {
      username: '',
      password:'',
      location:''
    };
  }

  }


  

