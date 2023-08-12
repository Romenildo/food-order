import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Foods;

  constructor(private activedRoute:ActivatedRoute, private fs:FoodService){
    activedRoute.params.subscribe(params=>{
      if(params['id']){
        this.food = fs.getFoodById(params['id'])
      }
    })
  }
  ngOnInit(): void {
  }

}
