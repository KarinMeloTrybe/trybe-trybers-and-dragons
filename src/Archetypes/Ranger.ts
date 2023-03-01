import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  _energyType: EnergyType;
  static instances = 0;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() : number {
    return Ranger.instances;
  }
}

export default Ranger;