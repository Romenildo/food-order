import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "search/:searchItem", component: HomeComponent},
  {path: "tag/:tag", component: HomeComponent},
  {path: "food/:id", component: FoodpageComponent},
  {path: "cart", component: CartPageComponent},
  {path: "login", component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
