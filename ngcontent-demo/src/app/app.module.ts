import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyButtonWithIconComponent } from './my-button-with-icon/my-button-with-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyButtonWithIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
