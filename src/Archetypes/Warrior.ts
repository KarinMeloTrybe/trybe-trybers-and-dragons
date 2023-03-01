import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  _energyType: EnergyType;
  static instances = 0;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.instances += 1;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() : number {
    return Warrior.instances;
  }
}

export default Warrior;