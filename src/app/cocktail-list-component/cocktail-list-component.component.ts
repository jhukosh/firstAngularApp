import { 
  Component,
  OnInit,
} from '@angular/core';
import { CocktailServiceService } from '../services/cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {
  cocktailsCollection = [];

  constructor(
    private cocktailService: CocktailServiceService
    ) {}

  ngOnInit() {
    this.cocktailsCollection = this.cocktailService.getCocktails();
  }

}
