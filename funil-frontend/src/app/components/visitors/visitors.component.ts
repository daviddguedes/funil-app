import { QuestionService } from './../../services/question/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-visitors",
  templateUrl: "./visitors.component.html",
  styleUrls: ["./visitors.component.scss"],
  providers: [QuestionService]
})
export class VisitorsComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }
}
