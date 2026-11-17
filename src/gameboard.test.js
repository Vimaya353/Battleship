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