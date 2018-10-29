import { Component, OnInit } from '@angular/core';
import { Competition } from '../competition';

@Component({
  selector: 'app-compotitions',
  templateUrl: './compotitions.component.html',
  styleUrls: ['./compotitions.component.css']
})
export class CompotitionsComponent implements OnInit {
compotitions: Set<Competition>;
  constructor() {
    // this.compotitionsss = CompotionsGet
   }

  ngOnInit() {
  }

}
