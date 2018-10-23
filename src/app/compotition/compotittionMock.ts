import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Compotition } from "./compotition";

@Injectable({
  providedIn: 'root',
})
export class CompotitionMock {
    constructor(){
        //this.initCompotitionObserver();
    }
    initCompotitionObserver() {
        const compo = this.creteCompotiton();
        return new Observable<Compotition>(objerver => {
            debugger;
            objerver.next(compo);
        })
    };
    creteCompotiton(): Compotition {
        var compotition = new Compotition();
        compotition.id = 1;
        compotition.name = "my compotition";
        compotition.title = "title 1";
        compotition.startTime = new Date(2018, 10, 20, 10, 50, 50);
        compotition.endTime = new Date(2018, 10, 22, 15, 30, 52);
        return compotition;
    }
    compotitionGet(): Compotition {
        var compo: Compotition;
        debugger;
        this.initCompotitionObserver().subscribe(x => {
            compo = x;;
        });
        return compo;
    }
}
