import { CarCardService } from './../../services/car-card.service';
import { CarCard } from './../../models/carCard';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';
import { faLiraSign, faGasPump, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Car } from 'src/app/models/car';



@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  carCards: CarCard[];
  currentCar:CarCard;
  filterText="";

  currentRoute: string = this.router.url;

  faLiraSign = faLiraSign;
  faCogs = faCogs;
  faGasPump = faGasPump;
  faUsers = faUsers;
  
  constructor(
    private router: Router, 
    private toastrService: ToastrService, 
    private carCardService: CarCardService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"] && params['colorId'] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']){
        this.getFilteredCarCards(params["brandId"], params['colorId'],params['minDailyPrice'],params['maxDailyPrice']);
        console.log("test");
        
      } 
      else{
        this.getCarCards();
      }
    })

    
  }

  getCarCards(){
    this.carCardService.getCarCards().subscribe((response) => {
      this.carCards = response.data;
      console.log(this.carCards);
      
    })
  }

  setCurrentCar(carCard:CarCard){
    this.currentCar = carCard;
    console.log(carCard.brandName +" "+ carCard.model +" is clicked");
  }

  getFilteredCarCards(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number){
    this.carCardService.getFilteredCars(brandId, colorId, minDailyPrice, maxDailyPrice).subscribe((response) => {
      this.carCards = response.data;
    })

  }




}
