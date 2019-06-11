import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//service
import { CartService } from '../cart.service';

//component regiteration for modules
@Component({// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same
  selector: 'app-cart', //refrence to HTML5 selector in app.component.html
  templateUrl: './cart.component.html',// reference to the html file created in the new component.
  styleUrls: ['./cart.component.css'] // reference to the style file.
})

export class CartComponent implements OnInit {
//class variables
items;
checkoutForm;
//constructor
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,) { 
    this.items = this.cartService.getItems();
      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  //methods
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}