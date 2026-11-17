import Player from './player';

export default class Game {
  constructor() {
    this.human = new Player('You');
    this.computer = new Player('Computer', true);
    this.currentPlayer = this.human;
    this.winner = null;
    this.setupDefaultShips();
  }

  setupDefaultShips() {
    const lengths = [5, 4, 3, 3, 2];
    lengths.forEach((len, i) => {
      this.human.gameboard.placeShip(len, [i, 0], 'horizontal');
      this.computer.gameboard.placeShip(len, [i, 0], 'horizontal');
    });
  }

  playTurn(coord) {
    if (this.winner) return;

    this.human.attack(this.computer.gameboard, coord);
    if (this.computer.gameboard.allSunk()) {
      this.winner = this.human;
      return;
    }

    this.computer.randomAttack(this.human.gameboard);
    if (this.human.gameboard.allSunk()) {
      this.winner = this.computer;
    }
  }
}