import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [
    new Ticket(1, new Date(2019,1,1), 'System', 'New Laptop', 'I need a new laptop', 'Low', 'New'),
    new Ticket(2, new Date(2019,4,1), 'Development', 'Add New Travel Category', 'I need a new category', 'Normal', 'New'),
    new Ticket(3, new Date(2019,1,31), 'Unknown', 'SAP Logon broken', 'I cannot logon to SAP', 'High', 'New'),
    new Ticket(4, new Date(2019,3,12), 'System', 'New share', 'I need a new share for HR', 'Low', 'New')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
