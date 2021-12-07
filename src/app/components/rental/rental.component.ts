import { Rental } from './../../models/rental';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] = [];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.rentalService.getRentals().subscribe((response) =>{
      this.rentals = response.data;
    });
  }

}
