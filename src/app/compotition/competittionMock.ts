import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Competition } from '../competition';

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
        const compotition = new Competition();
        compotition.id = 1;
        compotition.name = 'my compotition';
        compotition.title = 'title 1';
        compotition.startTime = new Date(2018, 10, 20, 10, 50, 50);
        compotition.endTime = new Date(2018, 10, 22, 15, 30, 52);
        return compotition;
    }
    compotitionGet(): Competition {
        let compo: Competition;
        this.initCompotitionObserver().subscribe(x => {
            compo = x;
        });
        return compo;
    }
}
