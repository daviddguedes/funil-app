import { Injectable } from "@angular/core";

import { DropdownQuestion } from "./../../models/question-dropdown";
import { QuestionBase } from "./../../models/question-base";
import { TextboxQuestion } from "./../../models/question-textbox";

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: "gender",
        label: "Select Gender",
        options: [
          { key: "male", value: "Male" },
          { key: "female", value: "Female" },
          { key: "other", value: "Other" }
        ],
        required: true,
        order: 4
      }),

      new TextboxQuestion({
        key: "firstName",
        label: "First name",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      }),

      new TextboxQuestion({
        key: "phoneNumber",
        label: "Phone",
        type: "text",
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
