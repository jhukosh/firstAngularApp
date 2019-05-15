import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  public developer : Developer;

  constructor() { }

  ngOnInit() {
    this.developer = {
      lastName: 'Papa',
      firstName: 'John',
      age : 32,
      sexe : 'Male',
      bio : 'badass web developer',
      skills : [
        {
          name : 'Angular',
          logo : 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F768px-Angular_full_color_logo.svg.png&f=1',
          site : 'https://angular.io/'
        },
        {
          name : 'React',
          logo : 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&f=1',
          site : 'https://reactjs.org/'
        },
      ]
    }
  }

}
