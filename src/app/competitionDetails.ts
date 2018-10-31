import { User } from './user';
import { Competition } from './competition1';
import { CompetingPhoto } from './competing-photo/competingPhoto';
export class CompetitionDetails {
    public constructor(init?: Partial<CompetitionDetails>) {
        Object.assign(this, init);
    }
    private _competition: Competition;
    public get competition(): Competition {
        return this._competition;
    }
    public set competition(v: Competition) {
        this._competition = v;
    }

    private _photoCompetitions: Array<CompetingPhoto>;
    public get photoCompetitions(): Array<CompetingPhoto> {
        return this._photoCompetitions;
    }
    public set photoCompetitions(v: Array<CompetingPhoto>) {
        this._photoCompetitions = v;
    }

}
