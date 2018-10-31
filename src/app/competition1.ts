export class Competition {
    public  constructor(init?: Partial<Competition>) {
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
    public getMockCompetition(): Competition {
        const compotition = new Competition();
        compotition.id = 1;
        compotition.name = 'my compotition';
        compotition.title = 'title 1';
        compotition.startTime = new Date(2018, 10, 20, 10, 50, 50);
        compotition.endTime = new Date(2018, 10, 22, 15, 30, 52);
        return compotition;
    }
    public  getMockCompetitions(): Array<Competition> {
        return new Array<Competition>(new Competition({
            name: 'competition 2', title: 'ex', id: 12,
            startTime: new Date(2018, 10, 20, 10, 50, 50),
            endTime: new Date(2018, 10, 22, 15, 30, 52)
        })
            , new Competition({
                name: 'competition3', id: 13, title: 'aa', startTime: new Date(2018, 10, 20, 10, 50, 50),
                endTime: new Date(2018, 10, 22, 15, 30, 52)
            }));
    }
}
