import { Injectable } from '@angular/core';
import Ticket from './Ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsUrl = 'https://icticketing.azurewebsites.net/api/ticket';  // URL to web api
  private ticketsUrlBasic = 'https://icticketing.azurewebsites.net/api/ticketbasic';  // URL to web api (basic auth)

  constructor(public httpClient: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.ticketsUrl)
    .pipe(resp => {
      return resp;
    });
  }

  getTicketBasic(): Observable<Ticket[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.get<Ticket[]>(this.ticketsUrlBasic, httpOptions)
    .pipe(resp => {
      return resp;
    });
  }
}
