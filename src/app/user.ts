import { PhotoCompotition } from './compotition/photoCompotition';
export class User {

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

    private _compotitionPhoto: PhotoCompotition;
    public get compotitionPhoto(): PhotoCompotition {
        return this._compotitionPhoto;
    }
    public set compotitionPhoto(v: PhotoCompotition) {
        this._compotitionPhoto = v;
    }


}
