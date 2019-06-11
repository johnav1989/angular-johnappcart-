import { Component } from '@angular/core';

import { products } from '../products';

//component regiteration for modules
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //assiging  const variable to object 
  products = products;

//method
  share() {
    window.alert('The product has been shared!');
  }
//method
   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
