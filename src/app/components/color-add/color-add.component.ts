import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private colorService: ColorService, 
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
    this.colorAddForm.valueChanges.subscribe(console.log);
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  add(){
    let colorModel: Color = Object.assign({}, this.colorAddForm.value);
    if (this.colorAddForm.valid) {
      this.colorService.add(colorModel).subscribe((response) => {
        this.toastrService.success(`${colorModel.name} is added successfully.`)
    }, (responseError) => {
      if (responseError.error.Errors.length > 0) {
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i]);
        }
      }
    })
    }
    else {
      this.toastrService.error("Complete the form!");
    }
  }

}
