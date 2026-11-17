import Ship from './ship';

export default class Gameboard {
    constructor() {
        this.ships = [];
    }

    placeShip(length, [row,col],direction = 'horizontal') {
        const coords = [];
        for (let i = 0; i < length; i++) {
            coords.push(direction === 'horizontal' ? [row, col + i] : [row + i, col]);
        }
        this.ships.push({ship: new Ship(length), coords });
    }

}

  const inside = coords.every(([r, c]) => r >= 0 && r < 10 && c >= 0 && c < 10);
    if (!inside) throw new Error('Ship is outside the board');

    const taken = this.ships.some((s) =>
    s.coords.some(([r, c]) => coords.some(([r2, c2]) => r === r2 && c === c2))
    );
    if (taken) throw new Error('Ships overlap');