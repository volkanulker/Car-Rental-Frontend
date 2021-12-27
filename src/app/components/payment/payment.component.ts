import { CarDetail } from './../../models/carDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentPrice: number;
  private carId: number;
  constructor(private activatedRoute: ActivatedRoute, private carDetailService: CardetailService) { }

  ngOnInit(): void {
    this.setCarId();
    this.setRentPrice(this.carId);

  }

  setRentPrice(carId: number) {
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.rentPrice = response.data[0].dailyPrice;

    });
  }

  setCarId() {
    this.activatedRoute.params.subscribe((params) => {
      this.carId = Number(params["carId"]);
    })
  }

  pay() {
    console.log("pay button is clicked");

  }

}
