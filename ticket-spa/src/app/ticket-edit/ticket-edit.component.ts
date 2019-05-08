import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ticket from '../Ticket';
import { TicketService } from '../ticket-service.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  id: number = 0;
  submitted: boolean = false;
  model: Ticket = {} as Ticket;

  constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketService.getTicketById(String(this.id))
      .subscribe(resp => this.model = resp);
  }

  onSubmit() {
    this.ticketService.updateTicket(this.model as Ticket)
    .subscribe(resp => {
      this.router.navigate(['/tickets'])
    });

    this.submitted = true;
  }
}
