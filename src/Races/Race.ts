abstract class Race {
  readonly name: string;
  readonly _dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this.name = name;
    this._dexterity = dexterity;
  }

  getName(): string {
    return this.name; 
  }

  get dexterity() : number {
    return this._dexterity;
  }

  public static createdRacesInstances() : number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints() : number;
}

export default Race;