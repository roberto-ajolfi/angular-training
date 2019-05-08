import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket-service.service';
import Ticket from '../Ticket';

@Component({
  selector: 'app-ticket-delete',
  templateUrl: './ticket-delete.component.html',
  styleUrls: ['./ticket-delete.component.css']
})
export class TicketDeleteComponent implements OnInit {

  id: number = 0;
  ticketToBeDeleted: Ticket = {} as Ticket;
  
  constructor(private ticketService: TicketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketService.getTicketById(String(this.id))
      .subscribe(resp => this.ticketToBeDeleted = resp);
  }

  deleteTicket(event) {
    this.ticketService.deleteTicket(String(this.id))
    .subscribe(resp => {
      this.router.navigate(['/tickets']);
    })
  }

}
