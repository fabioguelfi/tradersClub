import { EditComponent } from './../components/edit/edit.component';
import { FindListComponent } from "./../components/find-list/find-list.component";
import { WelcomeMessageComponent } from "./../components/welcome-message/welcome-message.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: 'full' },
  { path: "welcome", component: WelcomeMessageComponent },
  { path: "findList", component: FindListComponent },
  { path: "edit/:keyword", component: EditComponent},
  { path: "**", redirectTo: "welcome" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule {}
