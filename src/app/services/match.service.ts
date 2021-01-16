import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  results = JSON.parse(localStorage.getItem("results"));
  constructor() { }
   match  = new BehaviorSubject(this.results);
   matchData = this.match.asObservable();
  setMatch(newMatchData){
    if (localStorage.getItem("results") === null) {
      let results = [];
      results.push(newMatchData);
      localStorage.setItem("results", JSON.stringify(results));
      this.match.next(results)
    } else {
      let results = JSON.parse(localStorage.getItem("results"));
      results.push(newMatchData);
      localStorage.setItem("results", JSON.stringify(results));
      this.match.next(results)
    }
  }
}
