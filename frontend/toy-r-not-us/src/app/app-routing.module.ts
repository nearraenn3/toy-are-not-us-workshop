import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyProductComponent } from './toy-product/toy-product.component';

const routes: Routes = [
  { path: 'toy-product', component: ToyProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
