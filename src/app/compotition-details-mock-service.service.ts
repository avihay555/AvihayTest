import { Injectable } from '@angular/core';
import { CompetitionDetails } from './competitionDetails';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { CompetingPhoto } from './competing-photo/competingPhoto';
import { Competition } from './competition1';
// https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c//to do
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class CompotitionDetailsMockServiceService {
  constructor() { }

  getMockDetails(id: number): Observable<CompetitionDetails> {
    return of<CompetitionDetails>(
      new CompetitionDetails({
        competition: new Competition().getMockCompetition(),
        photoCompetitions: new CompetingPhoto().getMockPhotoCompetitions()
      }));
  }
}

