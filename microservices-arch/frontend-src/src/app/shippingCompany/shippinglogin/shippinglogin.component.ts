import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin/admin';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-shippinglogin',
  templateUrl: './shippinglogin.component.html',
  styleUrls: ['./shippinglogin.component.css']
})
export class ShippingloginComponent implements OnInit {
  admin: Admin =new Admin();

  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  goToHome():void{
    this.router.navigate(['/shippinghome']);
  }
  loginUser2(user:any){
     
    
    console.log("entereed email= "+ user.email);
    console.log("dbpassword= "+ user.password);
    console.log("em fn= "+this.authService.adminbyemail());
    console.log("pass fn= "+this.authService.adminbypass());

      
      if(user.password == "adminpassword" && user.email != null)
      {this.authService.loginUser2(user);
      this.router.navigate(['/adminhome']);
      alert("sucessfully login");
    }
    else if(user.password != "adminpassword" && user.email != null){
      alert("wrong password!Try again");
    }
    else if(user.email == null || user.password == null)
    {
      alert("enter username & password");
    }
  }
}
