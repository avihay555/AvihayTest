class photoCompotition
{
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
       
    private _photo : ImageBitmap;
    public get photo() : ImageBitmap {
        return this._photo;
    }
    public set photo(v : ImageBitmap) {
        this._photo = v;
    }

    
    private _numberOfLikes : number;
    public get numberOfLikes() : number {
        return this._numberOfLikes;
    }

    public set numberOfLikes(v : number) {
        this._numberOfLikes = v;
    }
    
    
}