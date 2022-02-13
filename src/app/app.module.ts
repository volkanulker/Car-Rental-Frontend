import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';


import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterCarsPipe } from './pipes/filter-cars.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './components/payment/payment.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { PaymentSuccessfullComponent } from './components/payment-successfull/payment-successfull.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterCarCardsPipe } from './pipes/filter-car-cards.pipe';



@NgModule({
  declarations: [
    AppComponent,
    //CarComponent,
    NaviComponent,
   
    RentalComponent,
    CustomerComponent,
    BrandComponent,
    ColorComponent,
    CardetailComponent,
    CartSummaryComponent,
    FooterComponent,
    FilterCarsPipe,
    CarFilterComponent,
    PaymentComponent,
    DatePickerComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    PaymentSuccessfullComponent,
    CarCardComponent,
    FilterCarCardsPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
