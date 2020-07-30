import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Import Component
import { ToyProductComponent } from './toy-product/toy-product.component';
import { from } from 'rxjs';

//Create component routes path
const routes: Routes = [
  { path: 'toy-product', component: ToyProductComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
