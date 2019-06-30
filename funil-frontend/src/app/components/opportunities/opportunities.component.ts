import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import {
  FormBuilder,
  Validators
} from "@angular/forms";

import { ApiService } from "./../../services/api/api.service";

@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.component.html",
  styleUrls: ["./opportunities.component.scss"]
})
export class OpportunitiesComponent implements OnInit {
  imgPlaceholder: string = "https://via.placeholder.com/500";
  uploadResponse = { status: "", message: "", filePath: "" };
  @ViewChild('basicModal', {static: true}) basicModal: ElementRef;

  opportunitieForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    oldPrice: [null, Validators.required],
    newPrice: [null, Validators.required],
    thumbUrl: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    public api: ApiService
  ) {}

  ngOnInit() {}

  setImagePreview(event) {
    if (event.target.files.length > 0) {
      const fileObj = event.target.files[0];
      this.opportunitieForm.get("thumbUrl").setValue(fileObj);
    }

    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgPlaceholder = reader.result.toString();
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("title", this.opportunitieForm.get("title").value);
    formData.append("description", this.opportunitieForm.get("description").value);
    formData.append("oldPrice", this.opportunitieForm.get("oldPrice").value);
    formData.append("newPrice", this.opportunitieForm.get("newPrice").value);
    formData.append("thumbUrl", this.opportunitieForm.get("thumbUrl").value);

    this.api.storeOpportunitie(formData).subscribe(
      response => {
        this.opportunitieForm.reset();
        this.basicModal.show();
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
