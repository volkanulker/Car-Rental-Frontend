import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  currentBrand:Brand;
  isAllCarsClicked:boolean = true;
  brandForm:FormGroup;

  brand:Brand;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandForm  = this.formBuilder.group({
      brand:[null]
    });
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
  submit() {
    console.log("Form Submitted")
    console.log(this.brandForm.value)
  }




}
