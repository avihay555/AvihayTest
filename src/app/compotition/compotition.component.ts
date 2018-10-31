import { Component, OnInit, Input } from '@angular/core';
import { interval, timer } from 'rxjs';
import { Router } from '@angular/router';
import { CompetitionMock } from './competittionMock';
import { Competition } from '../competition1';
import { NgLog } from '../log';

@Component({
  selector: 'app-compotition',
  templateUrl: './compotition.component.html'
})

export class CompotitionComponent implements OnInit {
  compotition: Competition;
  leftTime: string;
  constructor(private router: Router, private mock: CompetitionMock) {
    mock = new CompetitionMock();
    this.compotition = mock.compotitionGet();
  }

  @Input()
  set compotitionId(_compotitionId: number) {
  //
  }
  ngOnInit() {
   this.setTimer();
  }
  setTimer() {
    interval(1000).subscribe((x) => {
      console.log('observe input: ' + x.toString());
      const d = new Date();
      const leftDay = this.compotition.endTime.getDay() - d.getDay();
      const leftHour = this.compotition.endTime.getHours() - d.getHours();
      const leftMinu = this.compotition.endTime.getMinutes() - d.getMinutes();
      const leftSec = this.compotition.endTime.getSeconds() - d.getSeconds();
      this.leftTime = `Left Time: ${leftDay} Days, ${leftHour} Hours, ${leftMinu} Minuets, ${leftSec} Second`;
    });
  }
  register() {
    this.router.navigate(['compotition-register']).then(x => {
      console.log(x);
    });
  }

}
