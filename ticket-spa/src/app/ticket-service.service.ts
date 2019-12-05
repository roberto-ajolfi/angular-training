import { Injectable } from '@angular/core';
import Ticket from './Ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import TicketEdit from './TicketEdit';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  //private ticketsUrl = 'https://icticketing.azurewebsites.net/api/ticketanon';  // URL to web api
  private ticketsUrl = 'https://localhost:44328/api/ticketanon';  // URL to web api

  constructor(public httpClient: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.ticketsUrl)
    .pipe(resp => {
      return resp;
    });
  }

  getTicketById(id: string): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.ticketsUrl + '/' + id)
    .pipe(resp => {
      return resp;
    });
  }

  createTicket(ticket:TicketEdit): Observable<Ticket> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return this.httpClient.post<Ticket>(this.ticketsUrl, ticket, { headers: headers })
    .pipe(
      tap((ticket: Ticket) => console.log('added hero'))
    );
  }

  updateTicket(ticket: TicketEdit): Observable<Ticket> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return this.httpClient.put<Ticket>(this.ticketsUrl  + '/' + ticket.id, ticket, { headers: headers })
    .pipe(
      tap((ticket: Ticket) => console.log('hero updated'))
    );
  }

  deleteTicket(id: string): Observable<Ticket> {
    return this.httpClient.delete<Ticket>(this.ticketsUrl  + '/' + id)
    .pipe(
      tap((ticket: Ticket) => console.log('hero deleted'))
    );
  }
}
