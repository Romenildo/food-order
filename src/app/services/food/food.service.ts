import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [{
      id: 1,
      price: 30,
      name: 'sopa',
      favorite: false,
      star: 3.5,
      tags: ['fastfood', 'hamburger'],
      imageUrl: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/01/comidas-da-regiao-do-nordeste-moqueca-maranhense.jpg',
      cookTime: '10-15',
      origins: ['hermany', 'us'],
    },
    {
      id: 1,
      price: 30,
      name: 'coxinha',
      favorite: true,
      star: 5,
      tags: ['fastfood', 'hamburger'],
      imageUrl: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/02/coxinha-g772e5ca7a_1920.jpg',
      cookTime: '10-15',
      origins: ['hermany', 'us'],
    },
    ]
  }


}

/**
 * "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/01/comidas-da-regiao-do-nordeste-moqueca-maranhense.jpg",
             "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/02/coxinha-g772e5ca7a_1920.jpg", 
             "https://a.cdn-hotels.com/gdcs/production101/d809/aa4c6796-747a-4fbf-8b76-f90d6252dfa2.jpg",
            "https://www.montarumnegocio.com/wp-content/uploads/2021/05/Comidas-nordestinas-para-vender.jpg"
 */