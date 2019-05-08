import { Injectable } from '@angular/core';
import Ticket from './Ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { TicketNewComponent } from './ticket-new/ticket-new.component';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsUrl = 'https://icticketing.azurewebsites.net/api/ticket';  // URL to web api

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

  createTicket(ticket:Ticket): Observable<Ticket> {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return this.httpClient.post<Ticket>(this.ticketsUrl, ticket, { headers: headers })
    .pipe(
      tap((ticket: Ticket) => console.log('added hero'))
    );
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
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
