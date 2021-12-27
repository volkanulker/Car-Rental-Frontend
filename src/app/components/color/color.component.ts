import { FormBuilder, FormGroup } from '@angular/forms';
import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  currentColor:Color;
  isAllColorsClicked:boolean = true;

  colorForm:FormGroup;

  color:Color;

  constructor(private formBuilder:FormBuilder, private colorService:ColorService) { }

  ngOnInit(): void {
    this.colorForm  = this.formBuilder.group({
      color:[null]
    });
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
    this.isAllColorsClicked=false;
    console.log("Id:" + color.id +" name:"+color.name);  
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor && !this.isAllColorsClicked){
      return "list-group-item active";
    } else{
      return "list-group-item";
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    }else if(this.isAllColorsClicked){
      return "list-group-item active";
    } 
    else{
      return "list-group-item";
    }
  }

  makeAllColorsActive(){
    this.isAllColorsClicked = true;
    console.log("all cars clicked.");
    
  }
  submit() {
    console.log("Form Submitted")
    console.log(this.colorForm.value)
  }


}
