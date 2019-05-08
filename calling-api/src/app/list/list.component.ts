import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TicketService } from '../ticket-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tickets: Ticket[] = [];
  loading: boolean = true;

  /* private ticketsUrl = 'https://icticketing.azurewebsites.net/api/ticket';  // URL to web api */
  
  /* constructor(public httpClient: HttpClient) { } */
  constructor(public ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.loading = true;

    this.ticketService.getTickets()
      .subscribe(resp => {
        this.loading = false;
        this.tickets = resp;
      });
  
    
    /* this.httpClient.get<Ticket[]>(this.ticketsUrl)
      .subscribe(resp => {
        this.loading = false;
        this.tickets = resp;
      }); */


  }
}
