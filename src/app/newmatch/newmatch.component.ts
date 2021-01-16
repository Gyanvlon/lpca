import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidators }  from '../validations/validators'
import { MatchService } from '../services/match.service';
import { teams} from '../shared/teamsName'
@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.css']
})
export class NewmatchComponent implements OnInit {
  matchForm: FormGroup;
  submitted = false;
  teamsName = teams
  constructor(private router: Router, private formBuilder: FormBuilder, private matchService : MatchService) { }
  ngOnInit(): void {
     this.matchForm = this.formBuilder.group({
      firstTeamName: ['', Validators.required],
      firstTeamScore: ['', [Validators.required, NumberValidators.NumberOnly]],
      secondTeamName: ['', Validators.required],
      secondTeamScore: ['', [Validators.required, NumberValidators.NumberOnly]],
  });
  }
  get f() { return this.matchForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.matchForm.invalid) {
        return;
    }
    this.matchService.setMatch(this.matchForm.value)
    this.router.navigate(['/table']);
 }
}
