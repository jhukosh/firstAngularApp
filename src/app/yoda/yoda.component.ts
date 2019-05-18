import { Component, OnInit } from '@angular/core';
import { Question } from '../common/question.model';
import { QuestionsService } from '../services/questions.service';


@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {
  public answers: Question[] = [];
  public average: number = 0;
  public questions: Question[];
  answered : boolean;

  constructor(private questionsService : QuestionsService) { }

  ngOnInit() {
    this.getDatas()
    this.answered = false;
  }

  getDatas(){
    this.questionsService.getQuestions()
    .subscribe(question => { 
      this.questions = question;
    })
  }

  onGetAnswer(datas) : void{
    let bool = datas[0];
    let id = +datas[1] - 1;
    this.answers.push(this.questions[id]);
    console.log(this.answers);
    if(bool === this.questions[id].answer){
      this.average = this.calculateAverage(this.questions[id].score, this.average);
    }
  }

  calculateAverage(points, total:number) : number {
    total += points;
    return total;
  }

  onSubmit(){
    this.answered = true;
  }

}
