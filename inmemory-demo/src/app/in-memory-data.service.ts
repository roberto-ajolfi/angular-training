import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './Ticket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ticket = [
      new Ticket(1, new Date(2019,1,1), 'System', 'New Laptop', 'I need a new laptop', 'Low', 'New'),
      new Ticket(2, new Date(2019,4,1), 'Development', 'Add New Travel Category', 'I need a new category', 'Normal', 'New'),
      new Ticket(3, new Date(2019,1,31), 'Unknown', 'SAP Logon broken', 'I cannot logon to SAP', 'High', 'New'),
      new Ticket(4, new Date(2019,3,12), 'System', 'New share', 'I need a new share for HR', 'Low', 'New')
    ];
    return {'Ticket': ticket};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tickets: Ticket[]): number {
    return tickets.length > 0 ? Math.max(...tickets.map(hero => hero.id)) + 1 : 11;
  }
}