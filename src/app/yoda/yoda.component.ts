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
  answered : boolean; //to display good answers after submitting
  yodaMsg : string;
  convertedAnswers = new Array<string>(10); //to convert boolean to "yes" or "no" strings

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

    if(bool === this.questions[id].answer){
      this.average = this.calculateAverage(this.questions[id].score, this.average);
    };
    this.questions[id].answer ? this.convertedAnswers.splice(id, 1, 'Oui') : this.convertedAnswers.splice(id, 1, 'Non');
  }

  calculateAverage(points, total:number) : number {
    total += points;
    return total;
  }

  onSubmit(){
    this.answered = true;
    this.average >= 12 ? this.yodaMsg = 'Okay young padawan now you feel the dev force !' : this.yodaMsg ='Go and never come back...';
  }

}
