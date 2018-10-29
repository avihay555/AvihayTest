import { PhotoCompetition } from './compotition/photoCompotition';
export class User {
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    private _compotitionPhoto: PhotoCompetition;
    public get compotitionPhoto(): PhotoCompetition {
        return this._compotitionPhoto;
    }
    public set compotitionPhoto(v: PhotoCompetition) {
        this._compotitionPhoto = v;
    }


}
