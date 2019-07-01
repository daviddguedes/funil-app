import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api/api.service';
import { QuestionService } from './../../services/question/question.service';

@Component({
  selector: "app-visitors",
  templateUrl: "./visitors.component.html",
  styleUrls: ["./visitors.component.scss"],
  providers: [QuestionService]
})
export class VisitorsComponent implements OnInit {
  questions: any[];
  clearForm: boolean = false;

  constructor(
    public service: QuestionService,
    public api: ApiService
  ) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

  onSubmitForm(data) {
    this.api.storeVisitor(data).subscribe(
      response => {
        this.clearForm = true;
      },
      error => {
        this.clearForm = false;
        console.log('error', error);
      }
    );
  }
}
