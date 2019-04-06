import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
