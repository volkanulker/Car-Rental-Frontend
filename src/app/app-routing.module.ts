import { CarCardComponent } from './components/car-card/car-card.component';
import { PaymentSuccessfullComponent } from './components/payment-successfull/payment-successfull.component';

import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarCardComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  { path: 'cars', redirectTo: 'home', pathMatch: 'full' },
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/cardetail/:carId", component:CardetailComponent},
  {path:"cars/getfilteredcars/:brandId/:colorId/:minDailyPrice/:maxDailyPrice", component:CarComponent},
  {path:"cars/cardetail/:carId/payment", component:PaymentComponent},
  // {path:"products", component:ProductCardComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"payment/successfull",component:PaymentSuccessfullComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
