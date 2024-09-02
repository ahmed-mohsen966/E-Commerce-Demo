import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [ // note: first match wins
  {path: '', redirectTo: '/Home', pathMatch: 'full'}, // Default Path
  {path: 'Home', component: HomeComponent},
  {path: 'Products' , component: ProductsComponent},
  {path: 'Order' , component: OrderComponent},
  {path: '**' , component: NotFoundComponent} // Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
