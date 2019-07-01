import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "./../../models/question-base";
import { QuestionControlService } from "./../../services/question/question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() questions: QuestionBase<any>[] = [];
  @Input() clearForm: boolean;
  @Output() submitForm = new EventEmitter();

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  ngOnChanges() {
    if (this.clearForm) {
      this.form.reset();
    }
  }

  onSubmit() {
    return this.submitForm.emit(this.form.value);
  }
}
