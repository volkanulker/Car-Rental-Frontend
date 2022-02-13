import { CarCard } from './../models/carCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarCardService {

  private apiUrl = "https://localhost:44365/api";

  constructor(private httpClient:HttpClient) { }

  getCarCards():Observable<ListResponseModel<CarCard>>{
    let newPath = this.apiUrl + "/Cars/getcarcards";
    return this.httpClient.get<ListResponseModel<CarCard>>(newPath);
  }



  getFilteredCars(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number):Observable<ListResponseModel<CarCard>>{
    let newPath = this.apiUrl + "/Cars/getfilteredcarcards"
    +"?brandId="+ brandId.toString()
    +"&colorId="+colorId.toString()  
    +"&minDailyPrice="+minDailyPrice.toString()  
    +"&maxDailyPrice="+maxDailyPrice.toString() ; 
    
    return this.httpClient.get<ListResponseModel<CarCard>>(newPath);
  }
  



}
