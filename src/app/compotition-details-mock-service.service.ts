import { Injectable } from '@angular/core';
import { CompetitionDetails } from './competition-details';
import { Observable, of } from 'rxjs';
import { Competition } from './competition';
import { User } from './user';
import { PhotoCompetition } from './compotition/photoCompotition';

@Injectable({
  providedIn: 'root'
})
export class CompotitionDetailsMockServiceService {
  constructor() {}
  asdf() {
    return new User[2](
      new User({
        name: 'avihay',
        id: 1,
        compotitionPhoto: new PhotoCompetition({ id: 3, numberOfLikes: 20 })
      })
    );
  }

  getMockDetails(id: number): Observable<CompetitionDetails> {
    return of<CompetitionDetails>(
      new CompetitionDetails({
        competition: new Competition({
          name: 'avihay',
          id: 5,
          title: 'aa',
          startTime: new Date(),
          endTime: new Date()
        }),
        competitors: new User[2](
          new User({
            name: 'avihay',
            id: 1,
            compotitionPhoto: new PhotoCompetition({ id: 3, numberOfLikes: 20 })
          }),
          new User({
            name: 'roni',
            id: 5,
            compotitionPhoto: new PhotoCompetition({
              id: 90,
              numberOfLikes: 15
            })
          })
        )
      })
    );
  }
}
