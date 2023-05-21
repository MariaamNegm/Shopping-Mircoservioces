import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin/admin';
import { Sellingcompany } from 'src/app/model/sellingcompany/sellingcompany';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-sellinglogin',
  templateUrl: './sellinglogin.component.html',
  styleUrls: ['./sellinglogin.component.css']
})
export class SellingloginComponent implements OnInit {
admin: Admin =new Admin();
id:number =0;

selltologin : Sellingcompany = {
  username: '',
  pass:'',
};

isfound = false;
sells: any=[];

constructor(private http:HttpClient,private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  goToHome():void{
    this.router.navigate(['/sellinghome']);
  }

  check(){


    let isFound: boolean = false;

    let response= this.http.get("http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getsellcompanies");
    response.subscribe((data)=>this.sells=data);

    for (let i = 0; i < this.sells.length; i++) {
      console.log('sell ID:', this.sells[i].id);
      console.log('sell Name:', this.sells[i].username);
      console.log('-----------------------------');
    }
  

    for(let i=0; i<this.sells.length; i++){
      console.log('sell ID:', this.sells[i].username , '==',this.selltologin.username);
      console.log('sell ID:', this.sells[i].pass , '==',this.selltologin.pass);
       if(this.selltologin.username == this.sells[i].username && this.selltologin.pass == this.sells[i].pass){
        isFound = true;
        this.id=this.sells[i].id;
            break;
       }
       else{
        continue;
       }
   }
   console.log(isFound);
   console.log('username=',this.selltologin.username);
   console.log('password=',this.selltologin.pass);


   if(isFound == true){
  // this.authService.customerlogin(customer);

    console.log('id in login=',this.id);

    this.authService.setCompanyId(this.id);

    this.authService.sell_login(this.selltologin)
    .subscribe(
      response => {
        console.log(response);
        this.isfound = true;
        
      },
      error => {
        console.log(error);
      });
    this.router.navigate(['/sellinghome']);
   alert("sucessfully login");
   }
   else{
    alert("incorrect username or password! Try Again");
   }


}




}
