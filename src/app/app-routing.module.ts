import { PaymentComponent } from './components/payment/payment.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  { path: 'cars', redirectTo: 'home', pathMatch: 'full' },
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/cardetail/:carId", component:CardetailComponent},
  {path:"cars/getfilteredcars/:brandId/:colorId/:minDailyPrice/:maxDailyPrice", component:CarComponent},
  {path:"cars/cardetail/:carId/payment", component:PaymentComponent}

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
