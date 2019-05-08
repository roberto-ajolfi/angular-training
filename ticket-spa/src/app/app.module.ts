import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketNewComponent } from './ticket-new/ticket-new.component';
import { TicketDeleteComponent } from './ticket-delete/ticket-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    TicketEditComponent,
    TicketNewComponent,
    TicketDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
