import { Component } from '@angular/core';
import { Order} from '../common/class/order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  userForm: Order = new Order;

  onSubmit(){
    console.log('Form is submitted.');
  }

}
