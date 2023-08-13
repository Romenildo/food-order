import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart! :Cart

  constructor(private cs:CartService){
    this.setCart()
  }

  ngOnInit(): void {

  }

  setCart() {
    this.cart = this.cs.getCart()
  }

  removeFromCart(cartItem: CartItem){
    this.cs.removeFromCart(cartItem.food.id)
    this.setCart()
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cs.changeQuantity(quantity, cartItem.food.id )
    this.setCart()
  }


}
