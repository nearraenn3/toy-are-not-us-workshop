import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyProductComponent } from './toy-product/toy-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyProductComponent,
    ProductDetailComponent,
    MainComponent,
    CartComponent,
    AddressComponent,
    ThankyouComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
