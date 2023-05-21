import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Admin } from 'src/app/model/admin/admin';
import { Customer } from 'src/app/model/customer/customer';
import { Sellingcompany } from 'src/app/model/sellingcompany/sellingcompany';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
 
export class AuthServiceService {

  private companyId: number =0;
  public customerId: number =0;
   
  baseUrl = 'http://localhost:'+environment.SERVER_PORT+'/app/admin';
  constructor(private httpClient:HttpClient,private router:Router) { }

 
  registerUser(user: any)
  {
    this.httpClient.post('http://localhost:'+environment.SERVER_PORT+'/app/admin/signup',user).subscribe(res=>{
      console.log(res);
    })
  }

  loginUser2(user: any){
    this.httpClient.post('http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/admin',user).subscribe(res=>{
      console.log(res);
    })
  }

  adminbypass() {
    this.httpClient.get('http://localhost:'+environment.SERVER_PORT+'/app/admin/adminbypass').subscribe(res=>{
      console.log(res);
    })

  }
  adminbyemail(){
    return this.httpClient.get('http://localhost:'+environment.SERVER_PORT+'/app/admin/adminbyemail');
  }

  //register new customer  http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/addship
  register(data: any): Observable<any> 
    {return this.httpClient.post('http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/addCustomer', data);}
  

 //login customer  
  customerlogin(data: any): Observable<any> 
  {return this.httpClient.post('http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/login', data);}

  //login customer  
  customerlogout(data: any,id:number): Observable<any> 
  {return this.httpClient.post('http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/logout/'+id, data);}
   //login customer  
  selllogout(data: any,id:number): Observable<any> 
  {return this.httpClient.post('http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/logout/'+id, data);}
  
  //login sell company 
   sell_login(data: any): Observable<any> 
   {return this.httpClient.post('http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/login', data);}
   
  //get all customers
  getAllcustomers():Observable<Customer[]>
  {return this.httpClient.get<Customer[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/getcustomers`)}

   //get all sell companies 
   getAllsell():Observable<Sellingcompany[]>
   {return this.httpClient.get<Sellingcompany[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/getsellcompanies`)}
  
   setCompanyId(id: number): void {
    this.companyId = id;
  }

  getCompanyId(): number {
    return this.companyId;
  }

  setCustomerId(id: number): void {
    this.customerId = id;
  }

  getCustomerId(): number {
    return this.customerId;
  }
  
  
}
