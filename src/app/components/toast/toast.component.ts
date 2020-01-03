import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

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
