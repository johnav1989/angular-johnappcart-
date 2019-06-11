import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Import HttpClient from the @angular/common/http package.

//implementing injection
@Injectable({
  providedIn: 'root'
})

export class CartService {
//object array
items=[];

addToCart(product) {
    this.items.push(product);
    console.log("Hello");
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
//constructor
  constructor( private http: HttpClient) { }

}