import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cocktail } from '../common/class/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  private cocktailsUrl = '../../assets/cocktail.json';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>(this.cocktailsUrl);
  }


}
