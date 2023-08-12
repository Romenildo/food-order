import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[] {
    return ["Item 1", "Item 2", "item 3"]
  }
}
