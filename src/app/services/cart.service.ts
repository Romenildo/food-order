import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart()

  constructor() { }

  //Adicionar uma comida ao carrinho
  addToCart(food:Foods):void{
    //busca se a comida já exite no carrinho
    let cardItem = this.cart.items.find(item=> item.food.id === food.id)

    //caso ja tenha a comida cadastrada adiciona +1 a quantidade
    if(cardItem){
      this.changeQuantity(food.id, cardItem.quantity + 1)
      return
    }
    //se nao a comida ainda nao ta no carrinho ela é adicionada

    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number):void{
    //remove a comida a partir do id
    this.cart.items = this.cart.items.filter(item=> item.food.id != foodId)
  }

  changeQuantity(quantity: number, foodId:number):void{
    let cardItem = this.cart.items.find(item => item.food.id == foodId)
    if(!cardItem)return

    
    cardItem.quantity = quantity
  }

  getCart():Cart{
    return this.cart
  }
}
