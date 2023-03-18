import { Component } from '@angular/core';
import { course, frontEndSkills } from '../Skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  course: any = course;
  frontend: any = frontEndSkills;

}
