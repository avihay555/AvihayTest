export class Competition {
    public constructor(init?: Partial<Competition>) {
        Object.assign(this, init);
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }
    // Id
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }
    // Start Time
    private _startTime: Date;
    public get startTime(): Date {
        return this._startTime;
    }
    public set startTime(v: Date) {
        this._startTime = v;
    }
    // End Time
    private _endTime: Date;
    public get endTime(): Date {
        return this._endTime;
    }
    public set endTime(v: Date) {
        this._endTime = v;
    }

    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
    }

}
