import Energy from '../Energy';

interface Fighter {
  attack(enemy: Fighter): void,
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,
  special?(enemy: Fighter): void,
  levelUp(): void,
  receiveDamage(attackPoints: number): number,

}

export default Fighter;