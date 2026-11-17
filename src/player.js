import Gameboard from './gameboard';

export default class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  attack(enemyBoard, coord) {
    return enemyBoard.receiveAttack(coord);
  }
}