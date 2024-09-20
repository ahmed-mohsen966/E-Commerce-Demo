import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { ProductDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { authGuard } from './Guards/auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';

const routes: Routes = [ // note: first match wins
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Default Path
      { path: 'Home', component: HomeComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'Order', component: OrderComponent, canActivate: [authGuard] },
      { path: 'ProductDetails/:pid([0-9]+))', component: ProductDetailsComponent },
      { path: 'ProductsDetails/Add', component: AddProductComponent }
    ]
  },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Logout', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent } // Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
