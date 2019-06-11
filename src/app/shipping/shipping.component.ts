import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

//component regiteration for modules
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
//object
  shippingCosts;

//constructor
  constructor(private cartService: CartService) { 
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}