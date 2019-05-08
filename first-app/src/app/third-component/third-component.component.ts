import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {

  customStyle : any = {
    backgroundColor: 'darkGreen',
    fontWeight: 'bold',
    color: 'black'
  };

  color: string = 'crimson';

  constructor() { }

  ngOnInit() {
  }

  toggleStyle() {
    if(this.customStyle.backgroundColor == 'red'){
      this.customStyle = {
        backgroundColor: 'darkGreen',
        fontWeight: 'bold',
        color: 'black'
      }
      this.color = 'crimson';

    } else {
      this.customStyle = {
        backgroundColor: 'red',
        fontWeight: '',
        color: 'white'
      }
      this.color = 'white';
    }
  }

  toggleStyle2() {
    if(this.color == 'white'){
      return {
        backgroundColor: 'white',
        color: 'crimson'
      }
    } else {
      return {
        backgroundColor: 'navy',
        color: 'white'
      }
    }
  }

}
