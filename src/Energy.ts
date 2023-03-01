interface Energy {
  type_: EnergyType,
  amount: number,
}

export type EnergyType = 'stamina' | 'mana';

export default Energy;
