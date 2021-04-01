import { Injectable } from "@angular/core";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {
  constructor() {}
  
  calculateInitals = (string) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = [...string.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return initials;
  }

  dateToOurDate = (date, format = 'ddd, DD/MM/YYYY') => {
    return moment(date).format(format);
  }
}