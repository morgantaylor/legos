import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {

  colors = [
    'blue',
    'green',
    'red',
    'orange'
  ]

  constructor() { }

  ngOnInit() {
  }

}
