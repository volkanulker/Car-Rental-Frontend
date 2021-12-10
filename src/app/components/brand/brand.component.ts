import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  currentBrand:Brand;
  isAllCarsClicked:boolean = true;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
   this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
    this.isAllCarsClicked=false;
    console.log("Id:" + brand.id +" name:"+brand.name);
    
    
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand && !this.isAllCarsClicked){
      return "list-group-item active";
    } else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }else if(this.isAllCarsClicked){
      return "list-group-item active";
    } 
    else{
      return "list-group-item";
    }
  }

  makeAllCarsActive(){
    this.isAllCarsClicked = true;
    console.log("all cars clicked.");
    
  }




}
