import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfDays'
})
export class NumberOfDaysPipe implements PipeTransform {

  transform(value: number, hoursPerDay: number): number {
    return hoursPerDay > 0 ? Number((value / hoursPerDay).toFixed(1)) : 0;
  }

}
