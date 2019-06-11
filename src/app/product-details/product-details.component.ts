import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// to activate router

import { products } from '../products';
import { CartService } from '../cart.service';

//component regiteration for modules
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
//variable items
product;

//constructor
  constructor( private route: ActivatedRoute,private cartService: CartService) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }
  //method
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}