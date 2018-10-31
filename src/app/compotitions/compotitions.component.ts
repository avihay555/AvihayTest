import { Component, OnInit } from '@angular/core';
import { Competition } from '../competition1';
import { NgLog } from '../log';

@Component({
  selector: 'app-compotitions',
  templateUrl: './compotitions.component.html',
  styleUrls: ['./compotitions.component.css']
})
@NgLog()
export class CompotitionsComponent implements OnInit {
compotitions: Set<Competition>;
  constructor() {
    // this.compotitionsss = CompotionsGet
   }

  ngOnInit() {
  }

}
