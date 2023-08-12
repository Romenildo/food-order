import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "search/:searchItem", component: HomeComponent},
  {path: "tag/:tag", component: HomeComponent},
  {path: "food/:id", component: FoodpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
