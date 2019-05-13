import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonServicesModule } from './common-services/common-services.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
