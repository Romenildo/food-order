import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Foods;

  constructor(private activedRoute:ActivatedRoute, private fs:FoodService, private cs:CartService, private router:Router){
    activedRoute.params.subscribe(params=>{
      if(params['id']){
        this.food = fs.getFoodById(params['id'])
      }
    })
  }
  ngOnInit(): void {
  }

  addToCart(){
    this.cs.addToCart(this.food)
    this.router.navigateByUrl('/cart')
  }

}
