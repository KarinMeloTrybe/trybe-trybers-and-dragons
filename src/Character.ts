import Fighter from './Fighter';
import getRandomInt from './utils';
import Race, { Elf } from './Races';
import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';

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
    this._dexterity = getRandomInt(1, 10);
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
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get archetype() : Archetype {
    return this._archetype;
  }

  public get strength() : number {
    return this._strength;
  }

  public get race() : Race {
    return this._race;
  }

  public get defense() : number {
    return this._defense;
  }

  public get dexterity() : number {
    return this._dexterity;
  }

  public get energy() : Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    const lifeBalance = this._lifePoints - damage;
    if (damage > 0) {
      this._lifePoints -= damage;
    } 
    if (damage <= 0) {
      this._lifePoints = -1;
    } 
    if (lifeBalance <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints >= this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}
  
export default Character;