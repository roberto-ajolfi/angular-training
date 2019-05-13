import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable(/* {
  providedIn: CommonModule
} */)
export class AuthenticationService {

  constructor() { }

  getAuthToken():string {
    return 'auth1234';
  }
}
