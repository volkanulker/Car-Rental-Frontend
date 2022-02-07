import { ResponseModel } from './../models/responseModel';
import { Color } from './../models/color';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl = "https://localhost:44365/api";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "/Colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/Colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

}
