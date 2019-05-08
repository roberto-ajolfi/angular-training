import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  @Input() items: string[];
  @Output() clickItem = new EventEmitter<string>();
  @Output() clickOnMe = new EventEmitter();
  clicked: string = '';

  constructor() { }

  ngOnInit() {
  }

  clickAnItem(item: string) {
    this.clicked = `Clicked ${item}!`;
    this.clickItem.emit(item);
  }

  clickButton() {
    this.clickOnMe.emit();
  }
}
