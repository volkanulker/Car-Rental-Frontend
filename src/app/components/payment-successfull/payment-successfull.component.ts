import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-successfull',
  templateUrl: './payment-successfull.component.html',
  styleUrls: ['./payment-successfull.component.css']
})
export class PaymentSuccessfullComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
