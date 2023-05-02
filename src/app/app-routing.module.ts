import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { SkillComponent } from './skill/skill.component';
import { TestComponent } from './test/test.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "home", component: HomepageComponent },
  // { path: "skill", component: MyskillsComponent },
  { path: "skill", component: SkillComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactmeComponent },
  { path: "test", component: TestComponent },

  { path: " ", redirectTo: "home" },
  {path:"**",redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
