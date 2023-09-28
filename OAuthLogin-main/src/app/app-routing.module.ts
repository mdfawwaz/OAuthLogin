import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CycleShopComponent } from './cycle-shop/cycle-shop.component';
import { LoginComponent } from './login/login.component'; 
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{path:'',component:CycleShopComponent},
{path:'cycleStore',component:CycleShopComponent},
{path:'login', component:LoginComponent },
{path: 'logout', component:LogoutComponent},
  {path:'cart', component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
