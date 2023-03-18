import { Component,OnInit } from '@angular/core';
import { backEndSkills, controlversion, course, frontEndSkills } from '../Skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  courses:  any= course;
  frontend: any = frontEndSkills;
  backend: any = backEndSkills;
  vcontrol: any = controlversion;
  percent: Array<number> = [];

  constructor(){
    for(let i=0; i<frontEndSkills.length; i++){
      this.percent.push(frontEndSkills[i].percent);
      
    }

   

    // ngOnInit(): void {
    //   for(let i=0; i<frontEndSkills.length; i++){
    //     this.percent.push(frontEndSkills[i].percent);
      
    // }
    // console.log(this.percent);
    // console.log(this.course);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
