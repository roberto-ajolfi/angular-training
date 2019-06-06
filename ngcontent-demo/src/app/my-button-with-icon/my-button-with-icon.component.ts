import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-button-with-icon',
  templateUrl: './my-button-with-icon.component.html',
  styleUrls: ['./my-button-with-icon.component.css']
})
export class MyButtonWithIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    alert('you clicked the icon button!');
  }

}
