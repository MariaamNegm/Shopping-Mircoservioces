import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order/order';
import { Product } from 'src/app/model/product/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private productId: number =0;
  orderId: number =0;
  constructor(private http:HttpClient) { }
  
  //get all available products to be purshased
  get_available():Observable<Product[]>
  {return this.http.get<Product[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/product/getproducts`)}
  
  //http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/addproduct/4/3
  add_product_to_order(id1 : number,id2 :number,data:any): Observable<any> 
  {return this.http.post(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/addproduct/`+ id1 +`/`+ id2,data);}
 
  setproductId(id: number): void {
    this.productId = id;
  }

  getproductId(): number {
    return this.productId;
  }

  //http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/createorder/3  (3-->customer id)
  //add location to shipping company  
  create_order(data: any,id:number): Observable<any> 
  {return this.http.post(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/createorder/`+ id, data);}
  
    //http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/createorder/3  (3-->customer id)
  //get orders of certain customer by id
  get_orders_bycustomer(id:number):Observable<Order[]>
  {return this.http.get<Order[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getallbyid/`+ id)}
  

  setorderId(id: number): void {
    this.orderId = id;
  }

  getorderId(): number {
    return this.orderId;
  }

   //get current orders of certain customer by id
  get_current_orders_bycustomer(id:number):Observable<Order[]>
  {return this.http.get<Order[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getcurrentorders/`+ id)}
  

  //get past orders of certain customer by id
  get_past_orders_bycustomer(id:number):Observable<Order[]>
  {return this.http.get<Order[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getpastorders/`+ id)}
   
  
  //confirm order
  confirmorder(id1 : number,data:any): Observable<any> 
  {return this.http.post(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/confirmorder/`+ id1 ,data);}
   
  //get orders of certain customer by id
  get_notification_bycustomer(id:number):Observable<Notification[]>
  {return this.http.get<Notification[]>(`http://localhost:8080/demotrial-1.0-SNAPSHOT/api/customer/getnotifications/`+ id)}
   


}
