import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExponentialstrengthPipe } from './exponentialstrength.pipe';
import { NumberOfDaysPipe } from './number-of-days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialstrengthPipe,
    NumberOfDaysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
