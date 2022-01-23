import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {

  colors = [
  	'blue',
  	'outline-blue',
  	'green',
  	'outline-red'
  ]

  constructor() { }

  ngOnInit() {
  }

}
