import Gameboard from './gameboard';

test ('board has no ships at start', () => {
    const board = new Gameboard();
    expect(board.ships.length).toBe(0);
});

test ('places a ship horizontally', () => {
    const board = new Gameboard();
    board.placeShip(3, [0,0], 'horizontal');
    expect(board.ships.length).toBe(1);
    expect(board.ships[0].coords).toEqual ([[0,0],[0,1],[0,2]]);
});

test ('places a ship vertically', () => {
    const board = new Gameboard();
    board.placeShip(2, [1,1], 'vertical');
    expect(board.ships[0].coords).toEqual([[1,1],[2,1]]);
});

test('rejects ship that goes off the board', () => {
    const board = new Gameboard();
    expect(() => board.placeShips(3,[0,8], 'horizontal')).toThrow();
});

test('rejects overlapping ships', () => {
  const board = new Gameboard();
  board.placeShip(3, [0, 0], 'horizontal');
  expect(() => board.placeShip(2, [0, 1], 'vertical')).toThrow();
});

test('attack on a ship returns "hit" and damages it', () => {
  const board = new Gameboard();
  board.placeShip(2, [0, 0], 'horizontal');
  expect(board.receiveAttack([0, 0])).toBe('hit');
  expect(board.ships[0].ship.hits).toBe(1);
});

test('attack on empty water records a miss', () => {
  const board = new Gameboard();
  expect(board.receiveAttack([5, 5])).toBe('miss');
  expect(board.missedShots).toEqual([[5, 5]]);
});

test('cannot attack same square twice', () => {
  const board = new Gameboard();
  board.receiveAttack([5, 5]);
  expect(() => board.receiveAttack([5, 5])).toThrow();
});

test('allSunk is false when ships remain', () => {
  const board = new Gameboard();
  board.placeShip(1, [0, 0]);
  expect(board.allSunk()).toBe(false);
});

test('allSunk is true when every ship is sunk', () => {
  const board = new Gameboard();
  board.placeShip(1, [0, 0]);
  board.receiveAttack([0, 0]);
  expect(board.allSunk()).toBe(true);
});

test('randomizeShips places 5 ships without overlap', () => {
  const board = new Gameboard();
  board.randomizeShips([5, 4, 3, 3, 2]);
  expect(board.ships.length).toBe(5);
  const all = board.ships.flatMap((s) => s.coords.map((c) => c.join(',')));
  expect(new Set(all).size).toBe(17);
});