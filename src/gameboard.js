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