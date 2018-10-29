import { User } from './user';
import { Competition } from './competition';
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

    private _competitors: User[];
    public get competitors(): User[] {
        return this._competitors;
    }
    public set competitors(v: User[]) {
        this._competitors = v;
    }




}
