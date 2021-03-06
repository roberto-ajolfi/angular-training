import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'tickets',
    component: TicketListComponent,
    data: { title: 'Tickets List' }
  },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
