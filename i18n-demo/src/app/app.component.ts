import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n-demo';
  name = 'Roberto';

  languageList = [
    { code: 'en', label: 'English'},
    { code: 'it', label: 'Italiano'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
  }

  changeName() {
    this.name = 'Mauro';
  }
}
