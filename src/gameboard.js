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

    receiveAttack([row, col]) {
        const already = [...this.missedShots, ...this.hitShots].some(
            ([r, c]) => r === row && c === col
        );
        if (already) throw new Error('Already attacked here');

        const target = this.ships.find((s) =>
            s.coords.some(([r, c]) => r === row && c === col)
        );

        if (target) {
            target.ship.hit();
            this.hitShots.push([row, col]);
            return 'hit';
        }
        this.missedShots.push([row, col]);
        return 'miss';
    }

    allSunk() {
        return this.ships.length > 0 && this.ships.every((s) => s.ship.isSunk());
    }

    constructor() {
        this.ships = [];
        this.missedShots = [];
        this.hitShots = [];
    }

}

const inside = coords.every(([r, c]) => r >= 0 && r < 10 && c >= 0 && c < 10);
if (!inside) throw new Error('Ship is outside the board');

const taken = this.ships.some((s) =>
  s.coords.some(([r, c]) => coords.some(([r2, c2]) => r === r2 && c === c2))
);
if (taken) throw new Error('Ships overlap');

