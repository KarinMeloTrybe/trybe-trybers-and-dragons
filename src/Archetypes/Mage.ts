import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  _energyType: EnergyType;
  static instances = 0;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() : number {
    return Mage.instances;
  }
}

export default Mage; 