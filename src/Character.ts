import Fighter from './Fighter';
import Race from './Races';
import Energy from './Energy';
import Archetype from './Archetypes';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
    
  constructor(name: string) {
    /* this._dexterity = getRandomInt(1, 10); */
    this._name = name;
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  
  public get name() : string {
    return this._name;
  }
  
  public get special() : number {
    return this._special;
  }

  public get cost() : number {
    return this._cost;
  }

  public static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }

  abstract get energyType() : EnergyType;
}
  
export default Character;