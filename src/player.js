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

    randomAttack(enemyBoard) {
        const done = [...enemyBoard.missedShots, ...enemyBoard.hitShots];
        const options = [];
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
            if (!done.some(([a, b]) => a === r && b === c)) options.push([r, c]);
            }
        }
        const pick = options[Math.floor(Math.random() * options.length)];
        this.attack(enemyBoard, pick);
        return pick;
    }
}