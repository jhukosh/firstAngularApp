export class Question {
    id : string
    public title : string
    public answer : boolean
    public score : number
    constructor(id: string, title:string, answer:boolean, score:number){
        id = this.id,
        title = this.title,
        answer = this.answer,
        score = this.score
    }
}


