import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails = [
    {
      name : 'mojito',
      price : 8,
      picture : 'test'
    },
    {
      name : 'pina colada',
      price : 10,
      picture : 'test2'
    },
  ];
    
  getCocktails () {
    return this.cocktails;
  }

  constructor() { }
}
