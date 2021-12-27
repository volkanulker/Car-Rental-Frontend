import { PaymentService } from './../../services/payment.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { CarDetail } from './../../models/carDetail';
import { CardetailService } from './../../services/cardetail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})

export class CardetailComponent implements OnInit {

  carDetails: CarDetail[];
  isStartDatePicked: boolean;
  isEndDatePicked: boolean;

  numberOfRentDay: number;
  currentRoute: string = this.router.url;
  pageToRoute: string = this.router.url;



  constructor(private router: Router, 
    private carDetailService: CardetailService,
     private activatedRoute: ActivatedRoute, 
     private cartService: CartService, 
     private paymentService: PaymentService,
     private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"]);
        console.log(this.carDetails);

      }
    })
    this.paymentService.currentIsStartDatePicked.subscribe(value => this.isStartDatePicked = value);
    this.paymentService.currentIsEndDatePicked.subscribe(value => this.isEndDatePicked = value);
    this.paymentService.currentNumberOfRentDays.subscribe(value => this.numberOfRentDay = value);


  }

  getCarDetailsByCarId(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
      console.log(this.carDetails);

    });
  }

  addToCart(carDetail: CarDetail) {
    this.cartService.addToCart(carDetail);
    //this.router.navigateByUrl("/payment");
  }

  rent(carDetail: CarDetail) {
    if (this.isStartDatePicked && this.isEndDatePicked) {
      this.addToCart(carDetail);
      this.pageToRoute = this.currentRoute + '/payment';
      this.router.navigateByUrl(this.pageToRoute);
      
      console.log("date is picked");

    } else {
      this.pageToRoute = this.currentRoute;
      this.toastrService.error("Error","Date is not picked")
      console.log("date is not picked");

    }

  }





}
