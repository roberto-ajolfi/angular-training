import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  debugData: string = '';
  submitted: boolean = false;

  ticketForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl('', Validators.required),
    priority: new FormControl('Low', Validators.required),
    issueDate: new FormControl(moment())
  });

  constructor() { }

  ngOnInit() {
  }

  // one getter for each field subject to validation
  
  get title() {
    return this.ticketForm.get('title');
  }

  get category() {
    return this.ticketForm.get('category');
  }

  get priority() {
    return this.ticketForm.get('priority');
  }

  get issueDate() {
    return this.ticketForm.get('issueDate').value;
  }

  onSubmit() {
    console.log('Issue Date: ' + this.ticketForm.get('issueDate').value);
    //this.debugData = JSON.stringify({ ...this.ticketForm.value, issueDate: new Date(), state: 'New' });
    this.debugData = JSON.stringify({ ...this.ticketForm.value, state: 'New' });
    this.submitted = true;
  }

}
