import { Component, OnInit } from '@angular/core';
import { Compotition } from '../compotition/compotition';

@Component({
  selector: 'app-compotitions',
  templateUrl: './compotitions.component.html',
  styleUrls: ['./compotitions.component.css']
})
export class CompotitionsComponent implements OnInit {
compotitions: Set<Compotition>;
  constructor() {
    // this.compotitionsss = CompotionsGet
   }

  ngOnInit() {
  }

}
