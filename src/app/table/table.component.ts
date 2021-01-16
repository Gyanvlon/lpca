import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatchService } from '../services/match.service';
import { teams} from '../shared/teamsName'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  teamsName = teams;
  obj = {pld: 0,w: 0,d: 0,l: 0,pts: 0};
  teams=[];
  constructor(private location: Location, private matchService:MatchService) { }
  ngOnInit(): void {
    this.teams = this.teamsName.map(t =>  ({...this.obj, name: t}))
    this.matchService.matchData.subscribe( val =>{
      if(val !== null){
         val.forEach(ele => {
          let matchStatus= this.match(ele)
          this.teams = this.teams.map(t =>{
            if(matchStatus.winner == t.name){ 
               t.pld += 1
               t.w += 1
               t.pts +=3
              return t;
             }
            else if(matchStatus.looser == t.name) { 
               t.pld += 1
               t.l += 1
             return  t;
             }
             else if(matchStatus.fTeam == t.name){
              t.pld += 1
              t.d += 1
              t.pts +=1
             }
             else if(matchStatus.sTeam == t.name){
              t.pld += 1
              t.d += 1
              t.pts +=1
             }
             return t
         })

        })
      }
    })
    this.teams.sort((a, b) => {
      return b.pts - a.pts;
    });
  }
  goBack(){
    this.location.back();
  }
  match(v){
    if( parseInt(v.firstTeamScore) > parseInt(v.secondTeamScore)) return { winner:v.firstTeamName, looser:v.secondTeamName};
    else if( parseInt(v.firstTeamScore) < parseInt(v.secondTeamScore)) return { winner:v.secondTeamName, looser:v.firstTeamName};
    else return { fTeam:v.firstTeamName, sTeam:v.secondTeamName};
  }
}
