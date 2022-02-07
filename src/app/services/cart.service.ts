import { ToastrService } from 'ngx-toastr';
import { CarDetail } from './../models/carDetail';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(private toastrService:ToastrService) { }

  addToCart(carDetail:CarDetail){
    let item = CartItems.find(c => c.carDetails.id === carDetail.id);
    if(item){
      this.toastrService.error("Already added to the cart.",carDetail.model);
    } else{
      let cartItem = new CartItem();
      cartItem.carDetails = carDetail;
      CartItems.push(cartItem);
      this.toastrService.success("Added to the cart.",carDetail.model);

      
    }
  }

  removeFromCart(carDetail:CarDetail){
    let item = CartItems.find(c => c.carDetails.id === carDetail.id );
    if(item){
      CartItems.splice(CartItems.indexOf(item),1);
    }
  }

  list():CartItem[]{
    return CartItems;
  }

  getNumberOfItems(){
   return this.list().length;
  }

  clearCart(){
    while (CartItems.length > 0) {
      CartItems.pop();
      
    }
  }


}
