import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FOODS_URL } from 'src/app/shared/constants/url';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Foods[]>{
    return this.http.get<Foods[]>(FOODS_URL)
  }

  getAllFoodsBySearchTerm(searchTerm:string): Observable<Foods[]>{
    return this.http.get<Foods[]>(FOODS_URL + "/search/" + searchTerm)
  }

  getFoodById(foodId:string): Observable<Foods>{
    return this.http.get<Foods>(FOODS_URL + "/id/" + foodId)
  }

  getAllTag():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_URL + "/tags")
  }

  getAllFoodByTag(tag:string): Observable<Foods[]>{
    return tag == 'all' ?
      this.getAll() :
      this.http.get<Foods[]>(FOODS_URL + "/tags/" + tag)
  }


}