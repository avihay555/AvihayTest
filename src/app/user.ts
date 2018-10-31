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
    public getMockUser(): User {
        return new User({ name: 'avihay', id: 12 });
    }
    public getMockUsers(): Array<User> {
        return new Array<User>(new User({ name: 'avihay', id: 12 }), new User({ name: 'roni', id: 15 }));
    }

}
