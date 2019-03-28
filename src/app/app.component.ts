import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Julia\'s website !';
  showList :boolean;
  buttonText = "Afficher la liste de films";

  displayList(){
    this.showList = !this.showList;
    if (this.showList === true) {
      this.buttonText = "Cacher la liste de films";
    } else {
      this.buttonText = "Afficher la liste de films";
    }
  }
}
