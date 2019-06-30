import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SalesComponent } from './components/sales/sales.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { VisitorsComponent } from './components/visitors/visitors.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "opportunities", component: OpportunitiesComponent },
  { path: "sales", component: SalesComponent },
  { path: "visitors", component: VisitorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
