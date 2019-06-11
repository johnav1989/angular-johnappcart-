import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';//RouterModule
import { ReactiveFormsModule } from '@angular/forms';//ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; //Enable HttpClient for app


//Component Registeration
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';//our own component
import { ProductListComponent } from './product-list/product-list.component';//our own component
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';//our own component
import { ProductDetailsComponent } from './product-details/product-details.component';//our own component
import { CartComponent } from './cart/cart.component';//our own component
import { ShippingComponent } from './shipping/shipping.component';//our own component

//Service Regiteration
import { CartService } from './cart.service';

// includes the new-cmp component we created
@NgModule({
  imports:      [ BrowserModule,  ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },//to regiter new routing 
       { path: 'cart', component: CartComponent },// to regiter new routing for cart
       { path: 'shipping', component: ShippingComponent }, //to register ShippingComponent
    ])
    ],
    //component declarations
  declarations: [ AppComponent, TopBarComponent, ProductListComponent,ProductAlertsComponent, ProductDetailsComponent, CartComponent, ShippingComponent ],
    //component registerations
  bootstrap:    [ AppComponent ],
    //Service declarations
  providers: [CartService]
})
export class AppModule { 
  

}
