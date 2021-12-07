import { RentalResponseModel } from './../models/rentalResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl = "https://localhost:44365/api/Rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
  
}
