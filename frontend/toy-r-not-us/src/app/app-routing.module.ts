import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Import Component
import { ToyProductComponent } from './toy-product/toy-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent} from './address/address.component'; 
import { from } from 'rxjs';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

//Create component routes path
const routes: Routes = [
  { path: '', component: MainComponent}, 
  { path: 'main', component: MainComponent},  //homepage
  { path: 'toy-product', component: ToyProductComponent},
  { path: 'detail/:product', component: ProductDetailComponent},
  // { path: 'product-detail', component: ProductDetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'address', component: AddressComponent},
  { path: 'payment' , component: PaymentComponent},
  { path: 'thankyou', component:ThankyouComponent},
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
