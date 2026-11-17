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

test('computer never repeats a move', () => {
  const cpu = new Player('CPU', true);
  const enemy = new Player('Human');
  for (let i = 0; i < 100; i++) {
    cpu.randomAttack(enemy.gameboard);
  }
  expect(enemy.gameboard.missedShots.length).toBe(100);
});

test('computer attacks next to a previous hit', () => {
  const cpu = new Player('CPU', true);
  const enemy = new Player('Human');
  enemy.gameboard.placeShip(3, [5, 5], 'horizontal');
  cpu.lastHit = [5, 5];
  enemy.gameboard.receiveAttack([5, 5]);
  const [r, c] = cpu.smartAttack(enemy.gameboard);
  const distance = Math.abs(r - 5) + Math.abs(c - 5);
  expect(distance).toBe(1);
});