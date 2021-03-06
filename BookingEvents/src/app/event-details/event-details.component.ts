import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  parallaxElems;
  parallaxInstances;


  constructor() { }

  ngOnInit() {
    this.parallaxElems = document.querySelectorAll('.parallax');
    this.parallaxElems = M.Parallax.init( this.parallaxElems);

  }

}
