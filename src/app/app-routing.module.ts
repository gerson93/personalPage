import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "./projects/projects.component";
import { MeComponent } from "./me/me.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: MeComponent },
  { path: 'projects', component: ProjectsComponent, data: {animationState: 'project'}},
  { path: 'me', component: MeComponent, data: {animationState: 'me'}},
  { path: 'contact', component: ContactComponent, data: {animationState: 'contact'}}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
