import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-demo';
  currentDate = new Date();
  toggle = true;

  mantissa=2;
  exp=2;

  get format()   { return this.toggle ? 'dd/MM/yyyy' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
