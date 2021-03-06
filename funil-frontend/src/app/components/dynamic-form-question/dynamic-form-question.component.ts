import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "./../../models/question-base";

@Component({
  selector: "app-question",
  templateUrl: "./dynamic-form-question.component.html"
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isDirty() {
    return this.form.controls[this.question.key].dirty;
  }

  get isTouched() {
    return this.form.controls[this.question.key].touched;
  }
}
