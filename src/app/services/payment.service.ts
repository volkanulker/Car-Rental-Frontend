import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  numberOfRentDays = new BehaviorSubject<number>(-1);
  currentNumberOfRentDays = this.numberOfRentDays.asObservable();

  rentPrice = new BehaviorSubject<number>(-1);
  currentRentPrice = this.rentPrice.asObservable();

  isStartDatePicked = new BehaviorSubject<boolean>(false);
  currentIsStartDatePicked = this.isStartDatePicked.asObservable();

  isEndDatePicked = new BehaviorSubject<boolean>(false);
  currentIsEndDatePicked = this.isEndDatePicked.asObservable();



  constructor() { }


  getNumberOfDays():Observable<number>{
    return this.numberOfRentDays;
  }

  getRentPrice():Observable<number>{
    return this.rentPrice;
  }

  setNumberOfDays(value:number){
    this.numberOfRentDays.next(value);
  }

  setRentPrice(value:number){
    this.rentPrice.next(value);
  }

  getIsStartDatePicked():Observable<boolean>{
    return this.isStartDatePicked;
  }

  startDatePicked(){
    this.isStartDatePicked.next(true);
  }

  getIsEndDatePicked():Observable<boolean>{
    return this.isEndDatePicked;
  }

  endDatePicked(){
    this.isEndDatePicked.next(true);
  }


}
