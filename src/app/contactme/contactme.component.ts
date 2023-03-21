import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  ngOnInit(){
    $("button").click(function () {
      $("button").toggleClass("active");
      $(".title").toggleClass("active");
      $("nav").toggleClass("active");
    });
  }


}
