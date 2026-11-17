import Gameboard from './gameboard';

test ('board has no ships at start', () => {
    const board = new Gameboard();
    expect(board.ships.length).toBe(0);
});