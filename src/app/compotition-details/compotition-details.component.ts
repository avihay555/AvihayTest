import { Component, OnInit } from '@angular/core';
import { Router, Route, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compotition-details',
  templateUrl: './compotition-details.component.html',
  styleUrls: ['./compotition-details.component.css']
})
export class CompotitionDetailsComponent implements OnInit {

  compotitionId: number;
  constructor(private rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.compotitionId = +this.rout.snapshot.paramMap.get('id');
    // Get compotitiond details

  }

}
