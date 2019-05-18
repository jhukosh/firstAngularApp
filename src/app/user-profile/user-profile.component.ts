import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  ageDisplayed = false;
  buttonText = "Afficher l'âge";

User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  displayAge(){
    if (this.ageDisplayed) {
      this.ageDisplayed = false;
      this.buttonText = "Afficher l'âge";
    } else {
      this.ageDisplayed = true;
      this.buttonText = "Cacher l'âge";
    }
  }

}
