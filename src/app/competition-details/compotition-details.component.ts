import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompotitionDetailsMockServiceService } from '../compotition-details-mock-service.service';

@Component({
  selector: 'app-compotition-details',
  templateUrl: './compotition-details.component.html',
  styleUrls: ['./compotition-details.component.css']
})
export class CompotitionDetailsComponent implements OnInit {

  compotitionId: number;

  constructor(private rout: ActivatedRoute, private mockService: CompotitionDetailsMockServiceService) {
  }

  ngOnInit() {
    this.compotitionId = +this.rout.snapshot.paramMap.get('id');
    // Get compotitiond details
    this.mockService.getMockDetails(this.compotitionId);


  }

}
