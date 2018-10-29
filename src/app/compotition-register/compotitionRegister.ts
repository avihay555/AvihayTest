import { PhotoCompetition } from '../compotition/photoCompotition';

class CompetitionRegister {

    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(v: Date) {
        this._date = v;
    }

    private _compotitionId: number;
    public get compotitionId(): number {
        return this._compotitionId;
    }
    public set compotitionId(v: number) {
        this._compotitionId = v;
    }

    private _userId: number;
    public get userId(): number {
        return this._userId;
    }
    public set userId(v: number) {
        this._userId = v;
    }



    private _photoCompotitionId: PhotoCompetition;
    public get photoCompotitionId(): PhotoCompetition {
        return this._photoCompotitionId;
    }
    public set photoCompotitionId(v: PhotoCompetition) {
        this._photoCompotitionId = v;
    }



    private _isSuccessRegister: boolean;
    public get isSucsessRegister(): boolean {
        return this._isSuccessRegister;
    }
    public set isSuccessRegister(v: boolean) {
        this._isSuccessRegister = v;
    }
}
