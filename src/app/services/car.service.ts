import { Car } from './../models/car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "https://localhost:44365/api";

  constructor(private httpClient:HttpClient) { }

  

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "/Cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "/Cars/getcarsbybrandid?brandId=" + brandId.toString();
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "/Cars/getcarsbycolorid?colorId=" + colorId.toString();
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(carId:number){
    let newPath = this.apiUrl + "/Cars/getcar?carId=" + carId.toString();
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


}
