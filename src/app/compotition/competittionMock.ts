import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Competition } from '../competition1';


@Injectable({
    providedIn: 'root',
})
export class CompetitionMock {
    constructor() {
        // this.initCompotitionObserver();
    }
    initCompotitionObserver() {
        const compo = this.creteCompotiton();
        return new Observable<Competition>(objerver => {
            objerver.next(compo);
        });
    }
    creteCompotiton(): Competition {
        return  new Competition().getMockCompetition();
    }
    compotitionGet(): Competition {
        let compo: Competition;
        this.initCompotitionObserver().subscribe(x => {
            compo = x;
        });
        return compo;
    }
}
