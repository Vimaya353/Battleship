import Game from './game';

test('human goes first', () => {
  const game = new Game();
  expect(game.currentPlayer).toBe(game.human);
});

test('playTurn lets human attack, then computer replies', () => {
  const game = new Game();
  game.playTurn([0, 0]);
  const total =
    game.computer.gameboard.missedShots.length + game.computer.gameboard.hitShots.length;
  const reply =
    game.human.gameboard.missedShots.length + game.human.gameboard.hitShots.length;
  expect(total).toBe(1);
  expect(reply).toBe(1);
});

test('game reports winner when all enemy ships sunk', () => {
  const game = new Game();
  game.computer.gameboard.ships = [];
  game.computer.gameboard.placeShip(1, [0, 0]);
  game.playTurn([0, 0]);
  expect(game.winner).toBe(game.human);
});