import { Component } from '@angular/core';
import { backEndSkills, controlversion, course, frontEndSkills } from '../Skills';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  courses: Array<{name: string, img: string}> = course;
  frontend: Array<{name: string, img: string,percent:number,color:string}> = frontEndSkills;
  backend: Array<{name: string, img: string,percent:number,color:string}> = backEndSkills;
  vcontrol: Array<{name: string, img: string,percent:number,color:string}> = controlversion;

  percent: Array<number> = [];

  constructor(){
    // for(let i=0; i<course.length ;i++){
    //    this.courses.push(course[i]);
       
      
    // }
    // console.log(this.courses[0]["name"]);
  }
  
}
