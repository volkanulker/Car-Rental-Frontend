import { CarDetail } from './../../models/carDetail';
import { CardetailService } from './../../services/cardetail.service';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})

export class CardetailComponent implements OnInit {

  carDetails:CarDetail[];

  constructor(private carDetailService:CardetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
        console.log(this.carDetails);

      }
    })
  }

  getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
      console.log(this.carDetails);
      
    });
  }

}
