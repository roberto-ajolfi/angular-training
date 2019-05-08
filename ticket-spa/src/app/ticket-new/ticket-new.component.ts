import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';
import { TicketService } from '../ticket-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {

  submitted: boolean = false;
  model: Ticket;
  
  constructor(private ticketService: TicketService, private router: Router) { 
    this.model = new Ticket(0, null, '', '', '', 'Low', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.model.state = 'New';
    this.model.issueDate = new Date();
    
    this.ticketService.createTicket(this.model as Ticket)
    .subscribe(resp => {
      this.router.navigate(['/tickets'])
    });

    this.submitted = true;
  }

}
