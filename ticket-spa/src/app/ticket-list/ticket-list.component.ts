import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';
import { TicketService } from '../ticket-service.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];
  loading: boolean = true;
  
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets()
    .subscribe(resp => {
      this.tickets = resp;
      this.loading = false;
    })
  }

}
