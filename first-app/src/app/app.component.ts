import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  items: string[] = ['Pippo', 'Pluto', 'Paperino'];
  receivedData: string = '';

  sendMessage(item: string) {
    this.receivedData = `Hello, ${item}!`;
  }

  clickButton() {
    alert('Button click!');
  }
}
