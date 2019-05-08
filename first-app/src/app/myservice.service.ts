import { Injectable } from '@angular/core';

@Injectable(/* {
  providedIn: 'root'
} */)
export class MyserviceService {

  constructor() { }

  getLabel(name: string): string {
    return "Hello, " + name;
  }
}
