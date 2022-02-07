import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';
import { faLiraSign, faGasPump, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  carDetails: CarDetail[];
  currentRoute: string = this.router.url;

  faLiraSign = faLiraSign;
  faCogs = faCogs;
  faGasPump = faGasPump;
  faUsers = faUsers;
  filterText="";
  constructor(
    private router: Router, 
    private toastrService: ToastrService, 
    private carDetailService: CardetailService
  ) { }

  ngOnInit(): void {
  }

}
