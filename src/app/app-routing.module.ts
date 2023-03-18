import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  { path: "skill", component: SkillComponent },
  { path: " ", redirectTo: "home" },
  {path:"**",redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
