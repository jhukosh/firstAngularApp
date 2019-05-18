import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../common/question.model'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _url : string = '../../assets/questions.json'

  constructor(private http : HttpClient) { }

  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this._url)
  }
}
