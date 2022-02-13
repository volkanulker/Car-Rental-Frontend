import { Pipe, PipeTransform } from '@angular/core';
import { CarCard } from '../models/carCard';

@Pipe({
  name: 'filterCarCards'
})
export class FilterCarCardsPipe implements PipeTransform {

  transform(value: CarCard[], filterText:string): CarCard[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    
    return filterText ? value.filter((c: CarCard) => c.model.toLocaleLowerCase().includes(filterText) || c.brandName.toLocaleLowerCase().includes(filterText)  ) : value;
  }

}
