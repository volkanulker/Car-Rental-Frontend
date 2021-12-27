import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PaymentService } from 'src/app/services/payment.service';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  events: string[] = [];
  rentRange:number;
  isStartDatePicked:boolean;
  isEndDatePicked:boolean;
  rentPrice:number;
  

  constructor(private paymentService:PaymentService) {

  }

  ngOnInit(): void {
    this.paymentService.currentNumberOfRentDays.subscribe(value => this.rentRange = value);
    this.paymentService.currentIsStartDatePicked.subscribe(value => this.isStartDatePicked = value);
    this.paymentService.currentIsEndDatePicked.subscribe(value => this.isEndDatePicked = value);
    this.paymentService.currentRentPrice.subscribe(value => this.rentPrice = value);
    //console.log(this.dateRange.value.start);
    
  }


  setNumberOfDays(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    var diff = new Date(dateRangeEnd.value).valueOf() - new Date(dateRangeStart.value).valueOf();
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    this.paymentService.setNumberOfDays(diffDays);
    console.log(diffDays);
    
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  startDatePicked(){
    this.paymentService.startDatePicked();
    console.log("start date picked");
    
  }


  
  endDatePicked(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    this.paymentService.endDatePicked();
    this.setNumberOfDays(dateRangeStart,dateRangeEnd);
    console.log("End date picked");
    
  }


}
