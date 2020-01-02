import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  accordionSkins = [
    'green',
    'gray',
    'red',
    'blue'
  ]

  constructor() { }

  ngOnInit() {
  }

}
