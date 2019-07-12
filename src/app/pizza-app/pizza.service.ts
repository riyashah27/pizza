import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,of } from 'rxjs';


import { Pizza } from './pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas=[];
  pizza:Pizza[]=[];
  constructor(private httpClient:HttpClient) { }

  uri='http://localhost:4000/pizza'; 


  public getOrders():Observable<Pizza[]>
  {
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/allOrder');
  }
  
  public getAdminOrders():Observable<Pizza[]>
  {
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/admin/allOrder');
  } 
  
  public deletePizza(orderId:number)
  {
    return this.httpClient.delete(`${this.uri}`+'/admin/delete/'+`${orderId}`).
    subscribe(res=>console.log('Done'));
  }

  addAdminPizza(orderId,orderName,price,orderType)
  {
    let pizza={
      orderId:orderId,
      orderName:orderName,
      price:price,
      orderType:orderType
    };
    return this.httpClient.post(`${this.uri}`+'/admin/addOrder',pizza).
    subscribe(res=>console.log('New Order Added Successfully'));
  }

  editAdminPizza(orderId,price)
  {
    return this.httpClient.put(`${this.uri}`+'/admin/update/'+orderId+'/'+price,{}).
    subscribe(res=>console.log('New Order Edited Successfully'));
  }

  public addToCart(pizza)
  {
    this.pizzas.push(pizza);
  }

  public getCartPizzas()
  {
    return this.pizzas;
  }

  public getitems():Observable<Pizza[]>
  {
    return of(this.pizzas);
  }

  deleteFromCart(orderName)
  {
    this.pizzas.pop();
  }
}