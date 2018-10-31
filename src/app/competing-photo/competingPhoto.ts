import { User } from '../user';

export class CompetingPhoto {
    public constructor(init?: Partial<CompetingPhoto>) {
        Object.assign(this, init);
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    private _photo: ImageBitmap;
    public get photo(): ImageBitmap {
        return this._photo;
    }
    public set photo(v: ImageBitmap) {
        this._photo = v;
    }

    private _numberOfLikes: number;
    public get numberOfLikes(): number {
        return this._numberOfLikes;
    }
    public set numberOfLikes(v: number) {
        this._numberOfLikes = v;
    }
    private _user: User;
    public get user(): User {
        return this._user;
    }
    public set user(v: User) {
        this._user = v;
    }

    public getMockPhotoCompetition(): CompetingPhoto {
        return new CompetingPhoto({ id: 5, user: new User().getMockUser(), numberOfLikes: 30 });
    }
    public getMockPhotoCompetitions(): Array<CompetingPhoto> {
        return new Array<CompetingPhoto>(
            new CompetingPhoto({ id: 3, user: new User().getMockUser(), numberOfLikes: 356 })
            , new CompetingPhoto({ id: 4, user: new User().getMockUser(), numberOfLikes: 214 }));
    }
}
