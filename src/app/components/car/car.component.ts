// import { CarService } from './../../services/car.service';
// import { Car } from './../../models/car';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent implements OnInit {
//   cars:Car[] = [];
//   currentCar:Car;
//   filterText="";

//   constructor(private carService:CarService, private activatedRoute: ActivatedRoute, private toastrService:ToastrService) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(params => {
//       if(params["brandId"] && params['colorId'] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']){
//         this.getFilteredCars(params["brandId"], params['colorId'],params['minDailyPrice'],params['maxDailyPrice']);
//         console.log("test");
        
//       } 
//       else{
//         this.getCars();
//       }
//     })
//   }

//   setCurrentCar(car:Car){
//     this.currentCar  = car;
//     console.log(car.brandName +" is clicked");
    
//   }

//   getCars(){
//     this.carService.getCars().subscribe((response) => {
//       this.cars = response.data; 
//       console.log(this.cars);
           
//     });
//   }

//   getCarsByBrandId(brandId:number){
//     this.carService.getCarsByBrandId(brandId).subscribe((response) => {
//       this.cars = response.data;
//     });
//   }

//   getCarsByColorId(colorId:number){
//     this.carService.getCarsByColorId(colorId).subscribe((response) => {
//       this.cars = response.data;
//     });
//   }

//   getFilteredCars(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number){
//     this.carService.getFilteredCars(brandId, colorId, minDailyPrice, maxDailyPrice).subscribe((response) => {
//       this.cars = response.data;
//       console.log(response.data);
      
//     });
//   }


 

// }
