import { Component, OnInit } from '@angular/core';
import Ticket from '../Ticket';
import * as moment from 'moment';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  submitted: boolean = false;
  debugData: string = '';
  model: Ticket;

  constructor() { 
    this.model = new Ticket(0, moment().toDate(), '', '', '', 'Low', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model.issueDate);
    this.model.state = 'New';
    //this.model.issueDate = new Date();

    this.debugData = JSON.stringify(this.model);
    this.submitted = true;
  }

}
