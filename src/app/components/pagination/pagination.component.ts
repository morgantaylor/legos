import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  colors = [
    'blue',
    'green',
    'orange',
    'red'
  ]

  constructor() { }

  ngOnInit() {
  }

}
