import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ticket from '../Ticket';
import { TicketService } from '../ticket-service.service';
import TicketEdit from '../TicketEdit';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  id: number = 0;
  submitted: boolean = false;
  model: TicketEdit = {} as TicketEdit;

  constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketService.getTicketById(String(this.id))
      .subscribe(resp => {
        this.model = new TicketEdit(
          resp.id,
          new Date(),
          resp.category.id,
          resp.title,
          resp.description,
          resp.priority.id,
          resp.state.id
        );
      });
  }

  onSubmit() {
    var newTicket : TicketEdit = new TicketEdit(
      this.model.id, 
      new Date(), 
      this.model.categoryid, 
      this.model.title, 
      this.model.description, 
      this.model.priorityid,
      this.model.stateid
    );

    this.ticketService.updateTicket(this.model as TicketEdit)
    .subscribe(resp => {
      this.router.navigate(['/tickets'])
    });

    this.submitted = true;
  }
}
