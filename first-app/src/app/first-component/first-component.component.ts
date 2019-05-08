import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [MyserviceService]
})
export class FirstComponentComponent implements OnInit {

  numbers : number[] = [1, 2, 3];
  numbers2 = [4, 5, 6];
  label: string = '';

  constructor(private myService: MyserviceService) { 
    /* let nomi: any = ["Daniele", "Stefano", "Sara"];
    nomi.prop = "valore";

    for (let p in nomi) {
      console.log("let in nomi: " + p); // "valore"
   }
   
   for (let n of nomi) {
    console.log("let of nomi: " + n); // "Daniele", "Stefano", "Sara"
  } */

  }

  ngOnInit() {
    this.label = this.myService.getLabel("Roberto");
  }

}
