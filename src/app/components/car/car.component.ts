import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  currentCar:Car;

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      } else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"]);
      } 
      else{
        this.getCars();
      }
    })
  }

  setCurrentCar(car:Car){
    this.currentCar  = car;
    console.log(car.model +" is clicked");
    
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;      
    });
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

 

}
