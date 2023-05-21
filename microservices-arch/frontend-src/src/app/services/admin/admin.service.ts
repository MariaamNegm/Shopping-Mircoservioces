import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer/customer';
import { Sellingcompany } from 'src/app/model/sellingcompany/sellingcompany';
import { Shippingcompany } from 'src/app/model/shippingcompany/shippingcompany';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  baseURL= "http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin";  //get url from backend
  constructor(private httpClient:HttpClient,private router:Router) { }

  getAllcustomers():Observable<Customer[]>
  {return this.httpClient.get<Customer[]>(`${this.baseURL}/getcustomers`)}
  

  getAllsellingCompanies():Observable<Sellingcompany[]>
  {return this.httpClient.get<Sellingcompany[]>(`http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getsellcompanies`)}

  getAllshippingCompanies():Observable<Shippingcompany[]>
  {return this.httpClient.get<Shippingcompany[]>(`http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getshipcompanies`)}
  
  //add new selling company   http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/addCompany
  createselling(data: any): Observable<any> 
  {return this.httpClient.post(`http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/addCompany`, data);}

  //add new shipping company   http://localhost:8080/demotrial-1.0-SNAPSHOT/api/admin/addship
  createshipping(data: any): Observable<any> 
    {return this.httpClient.post(`http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/addship`, data);}

  //add location to shipping company  
  addlocation(data: any,id:number): Observable<any> 
  {return this.httpClient.post(`http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/addlocation/`+ id, data);}
}
