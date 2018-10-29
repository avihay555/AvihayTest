class compotitionRegister {

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


  
  private _photoCompotitionId : photoCompotition;
  public get photoCompotitionId() : photoCompotition {
      return this._photoCompotitionId;
  }
  public set photoCompotitionId(v : photoCompotition) {
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