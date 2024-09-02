import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';

const routes: Routes = [ // note: first match wins
  {path: '' , component: MainLayoutComponent, children : [
    {path: '', redirectTo: '/Home', pathMatch: 'full'}, // Default Path
    {path: 'Home', component: HomeComponent},
    {path: 'Products' , component: ProductsComponent},
    {path: 'Order' , component: OrderComponent},
  ]} ,
  {path: 'Login' , component: UserLoginComponent},
  {path: '**' , component: NotFoundComponent} // Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
