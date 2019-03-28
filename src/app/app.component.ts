import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Julia\'s website !';
  hover :boolean;

  displayList(){
    this.hover = !this.hover;
    }
}
