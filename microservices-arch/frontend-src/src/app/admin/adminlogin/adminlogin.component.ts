import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin/admin';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin: Admin =new Admin();


constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }

  loginUser2(user:any){
     
    
    console.log("entereed email= "+ user.email);
    console.log("dbpassword= "+ user.password);
    console.log("em fn= "+this.authService.adminbyemail());
    console.log("pass fn= "+this.authService.adminbypass());

      
      if(user.password == "adminpassword" && user.email ==  "admin1")
      {this.authService.loginUser2(user);
      this.router.navigate(['/adminhome']);
      alert("sucessfully login");
    }
    else if(user.password != "adminpassword" || user.email != "admin1"){
      alert("wrong password or email!Try again");
    }

    else if(user.email == null || user.password == null)
    {
      alert("enter username & password");
    }
  }

}
