import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() id: string;
  @Input() public question: string;
  @Output() answer = new EventEmitter();
  yesAnswer = true;
  noAnswer = false;
  disableBool: boolean; //to disable checkbox input after choice (needs improvement to re-enable)

  ngOnInit() {
    this.disableBool = false;
  }

  sendAnswer(response, id): void{
    let responseDatas = [response, id];
    this.answer.emit(responseDatas);
    this.disableBool = true;
  }

}
