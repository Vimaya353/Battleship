import Player from './player';

test('player has its own gameboard', () => {
  const p = new Player('Sam');
  expect(p.gameboard).toBeDefined();
});

test('player can attack enemy board', () => {
  const p = new Player('Sam');
  const enemy = new Player('CPU', true);
  p.attack(enemy.gameboard, [0, 0]);
  expect(enemy.gameboard.missedShots).toEqual([[0, 0]]);
});