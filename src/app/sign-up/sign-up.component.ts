import { Component, OnInit } from '@angular/core';
import { Order} from '../class/order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm: Order = new Order;

  constructor() { }

  ngOnInit(){}

  onSubmit(){
    console.log('Form is submitted.');
  }

}
