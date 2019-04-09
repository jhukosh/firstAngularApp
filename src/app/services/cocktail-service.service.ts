import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails = [
    {
      name : 'mojito :',
      price : " 8 euros",
      picture : 'test'
    },
    {
      name : 'pina colada :',
      price : " 10 euros",
      picture : 'test2'
    },
  ];
    
  getCocktails () {
    return this.cocktails;
  }

  constructor() { }
}
