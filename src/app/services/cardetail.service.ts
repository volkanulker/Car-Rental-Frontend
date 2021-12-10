import { CarDetail } from './../models/carDetail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  private apiUrl = "https://localhost:44365/api";

  constructor(private httpClient:HttpClient) { }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "/Cars/getcardetailsbyid?carId=" + carId.toString();
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  
}
