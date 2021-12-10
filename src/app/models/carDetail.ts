import { ResponseModel } from './responseModel';
import { Car } from './car';
export interface CarDetail {
    id:number;
    brandName:string;
    colorName:string;
    model:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePath:string;
}