import { 
  Component,
  OnInit,
} from '@angular/core';
import { CocktailServiceService } from '../services/cocktail-service.service';
import { Cocktail } from '../common/class/cocktail.model';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {
  public cocktails = [];

  constructor(
    private cocktailService: CocktailServiceService
    ) {}

  ngOnInit() {
    this.cocktailService.getCocktails()
      .subscribe(cocktail => {
        this.cocktails = cocktail;
      });
  }

}
