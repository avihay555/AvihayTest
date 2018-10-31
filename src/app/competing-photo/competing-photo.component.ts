import { Component, OnInit } from '@angular/core';
import { CompetingPhoto } from './competingPhoto';

@Component({
  selector: 'app-competing-photo',
  templateUrl: './competing-photo.component.html',
  styleUrls: ['./competing-photo.component.css']
})

export class CompetingPhotoComponent implements OnInit {
  competingPhoto: CompetingPhoto;
  constructor() {
    // get photoCompting
    this.competingPhoto = new CompetingPhoto().getMockPhotoCompetition();
  }

  ngOnInit() {
  }

}
