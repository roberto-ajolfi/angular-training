import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';
import { Ticket } from './Ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tickets: Ticket[];
  title = 'inmemory';

  /**
   *
   */
  constructor(private ticketService:TicketService) {
  }

  ngOnInit(): void {
    this.ticketService.getTickets()
      .subscribe(resp => {
        this.tickets = resp;
      });
  }
}
