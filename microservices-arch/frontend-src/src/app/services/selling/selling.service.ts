import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product/product';
import { Sellingcompany } from 'src/app/model/sellingcompany/sellingcompany';

@Injectable({
  providedIn: 'root'
})
export class SellingService {

  constructor(private httpClient:HttpClient) { }
  


    //add new product  http://localhost:8080/demotrial-1.0-SNAPSHOT/api/sell/addproduct/1
    add_product(data: any,id:number): Observable<any> 
    { console.log('id at service =',id);
    console.log('product name =',data.name);
    return this.httpClient.post('http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/addproduct/'+id, data);}
    
    //get all available products for a slling company
    getAllproducts(id:number):Observable<Product[]>
    {return this.httpClient.get<Product[]>(`http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/getsaleproducts/`+id)}
    
    //get all sold products for a slling company
    getAllsoldproducts(id:number):Observable<Product[]>
    {return this.httpClient.get<Product[]>(`http://localhost:16968/demotrial-1.0-SNAPSHOT/api/sell/getsoldoutbyid/`+id)}


  }
