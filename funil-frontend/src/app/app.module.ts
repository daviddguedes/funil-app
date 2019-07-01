import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { OpportunitiesComponent } from "./components/opportunities/opportunities.component";
import { SalesComponent } from "./components/sales/sales.component";
import { VisitorsComponent } from "./components/visitors/visitors.component";
import { ApiService } from './services/api/api.service';

import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DynamicFormQuestionComponent } from "./components/dynamic-form-question/dynamic-form-question.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OpportunitiesComponent,
    SalesComponent,
    VisitorsComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
