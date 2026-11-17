import Player from './player';

export default class Game {
  constructor() {
    this.human = new Player('You');
    this.computer = new Player('Computer', true);
    this.currentPlayer = this.human;
    this.winner = null;
    this.human.gameboard.randomizeShips();
    this.computer.gameboard.randomizeShips();
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