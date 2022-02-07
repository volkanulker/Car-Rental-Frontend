import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarCardService {

  private apiUrl = "https://localhost:44365/api";

  constructor(private httpClient:HttpClient) { }

  
}
