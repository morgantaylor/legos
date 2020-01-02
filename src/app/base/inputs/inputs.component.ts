import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  inputTypes = [
    'checkbox',
    'radio',
    'color',
    'date',
    'email',
    'number',
    'password',
    'range',
    'search',
    'text',
    'time'
  ]

  constructor() { }

  ngOnInit() {
  }

}
