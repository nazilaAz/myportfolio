import { Component } from '@angular/core';
import { backEndSkills, controlversion, course, frontEndSkills } from '../Skills';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  courses:  any= course;
  frontend: any = frontEndSkills;
  backend: any = backEndSkills;
  vcontrol: any = controlversion;
  percent: Array<number> = [];
}
