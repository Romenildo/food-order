import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';


import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[]=[]
  constructor(private fs:FoodService, private router:ActivatedRoute){}

  ngOnInit(): void {

    let foodObservable:Observable<Foods[]>
    this.router.params.subscribe(params=>{
      if(params['searchItem']){
        foodObservable = this.fs.getAllFoodsBySearchTerm(params['searchItem'])
      } else if(params['tag']){
        foodObservable = this.fs.getAllFoodByTag(params['tag'])
      }else{
        foodObservable = this.fs.getAll()
      }
      foodObservable.subscribe(serverFoods =>{
        this.foods = serverFoods
      })
    })
  }

  
}
