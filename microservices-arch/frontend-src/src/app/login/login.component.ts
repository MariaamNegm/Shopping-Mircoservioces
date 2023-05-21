import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin/admin';
import { AuthServiceService } from '../services/login/auth-service.service';
import { Customer } from '../model/customer/customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private authService:AuthServiceService, private router: Router) { }
  admin: Admin =new Admin();

   customertologin : Customer = {
    username: '',
    password:'',
  };
  
  customers: any=[];

  isfound = false;
  ngOnInit(): void {
  }

  goToSignUp(): void{
    this.router.navigate(['/register']);
  }

  goToHome():void{
    this.router.navigate(['/home']);
  }
  loginselling():void{
    this.router.navigate(['/sellinglogin']);
  }
  loginadmin():void{
    this.router.navigate(['/adminlogin']);
  }
  loginshipping():void{
    this.router.navigate(['/shippinglogin']);
  }


    check(){
      let isFound: boolean = false;

      let response= this.http.get("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/getcustomers");
      response.subscribe((data)=>this.customers=data);

      for (let i = 0; i < this.customers.length; i++) {
        console.log('Customer ID:', this.customers[i].id);
        console.log('Customer Name:', this.customers[i].username);
        console.log('Customer Location:', this.customers[i].location);
        console.log('-----------------------------');

      }
    

      for(let i=0; i<this.customers.length; i++){
        console.log(this.customers[i].username);
        console.log(this.customers[i].password);
         if(this.customertologin.username == this.customers[i].username && this.customertologin.password == this.customers[i].password){
          isFound = true;
          this.authService.setCustomerId(this.customers[i].id);
              break;
         }
         else{
          continue;
         }
     }
     console.log(isFound);
     console.log(this.customertologin.username);
     console.log(this.customertologin.password);


     if(isFound == true){
    // this.authService.customerlogin(customer);

      this.authService.customerlogin(this.customertologin)
      .subscribe(
        response => {
          console.log(response);
          this.isfound = true;
          
        },
        error => {
          console.log(error);
        });
      this.router.navigate(['/customerhome']);
     alert("sucessfully login");
     }
     else{
      alert("incorrect username or password! Try Again");
     }
  

  }

}