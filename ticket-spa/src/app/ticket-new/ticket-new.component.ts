import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';
import { TicketService } from '../ticket-service.service';
import { Router } from '@angular/router';
import TicketEdit from '../TicketEdit';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {

  submitted: boolean = false;
  model: TicketEdit;
  
  constructor(private ticketService: TicketService, private router: Router) { 
    this.model = new TicketEdit(0, null, 0, '', '', 0, 0);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.model.stateid = 1;
    this.model.issueDate = new Date();
    
    this.ticketService.createTicket(this.model as TicketEdit)
    .subscribe(resp => {
      this.router.navigate(['/tickets'])
    });

    this.submitted = true;
  }

}
