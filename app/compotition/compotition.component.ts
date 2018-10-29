import { Component, OnInit, Input } from '@angular/core';
import { interval, timer } from 'rxjs';
import { Router } from '@angular/router';
import { CompotitionMock } from './competittionMock';
import { Compotition } from '../competition';


@Component({
  selector: 'app-compotition',
  templateUrl: './compotition.component.html',
  styleUrls: ['./compotition.component.css']
})
export class CompotitionComponent implements OnInit {
  compotition: Compotition;
  leftTime: string;
  constructor(private router: Router, private mock: CompotitionMock) {
    mock = new CompotitionMock();
    this.compotition = mock.compotitionGet();
  }

  @Input()
  set compotitionId(_compotitionId: number) {
    // getCompotiton(compotitionId)
  }
  ngOnInit() {
    this.setTimer();
  }
  setTimer() {
    interval(100).subscribe(() => {
      const d = new Date();
      const leftDay = this.compotition.endTime.getDay() - d.getDay();
      const leftHour = this.compotition.endTime.getHours() - d.getHours();
      const leftMinu = this.compotition.endTime.getMinutes() - d.getMinutes();
      const leftSec = this.compotition.endTime.getSeconds() - d.getSeconds();
      this.leftTime = `Left Time: ${leftDay} Days, ${leftHour} Hours, ${leftMinu} Minuets, ${leftSec} Second`;
    });
  }
  register() {
    // this.router.navigate(["compotition-register"]).then(x => {
    //   console.log(x);
    // });
  }

}
