import { Component } from '@angular/core';
import { backEndSkills, controlversion, course, frontEndSkills } from '../Skills';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
  courses: Array<{name: string, img: string}> = course;
  frontend: Array<{name: string, img: string,percent:number,color:string}> = frontEndSkills;
  backend: Array<{name: string, img: string,percent:number,color:string}> = backEndSkills;
  vcontrol: Array<{name: string, img: string,percent:number,color:string}> = controlversion;

}
