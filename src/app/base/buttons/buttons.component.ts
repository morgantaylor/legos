import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  colors = [
    'blue',
    'green',
    'red',
    'orange',
    'gray'
  ]

  constructor() { }

  ngOnInit() {
  }

}
