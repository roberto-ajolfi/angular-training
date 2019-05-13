import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket-service.service';
import Ticket from './Ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tickets: Ticket[];

  ngOnInit(): void {
    this.ticketService.getTicketBasic()
    .subscribe(resp => {
      this.tickets = resp;
    });
  }
  title = 'httpinterceptors-demo';

  constructor(private ticketService: TicketService) {
    
  }


}
