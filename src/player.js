import Gameboard from './gameboard';

export default class Player {
    constructor(name, isComputer = false) {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = new Gameboard();
    }

    attack(enemyBoard, coord) {
        return enemyBoard.receiveAttack(coord);
    }

    randomAttack(enemyBoard) {
        const done = [...enemyBoard.missedShots, ...enemyBoard.hitShots];
        const options = [];
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
            if (!done.some(([a, b]) => a === r && b === c)) options.push([r, c]);
            }
        }
        const pick = options[Math.floor(Math.random() * options.length)];
        this.attack(enemyBoard, pick);
        return pick;
    }

     smartAttack(enemyBoard) {
        if (this.lastHit) {
            const [r, c] = this.lastHit;
            const done = [...enemyBoard.missedShots, ...enemyBoard.hitShots];
            const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(
            ([a, b]) =>
                a >= 0 && a < 10 && b >= 0 && b < 10 &&
                !done.some(([x, y]) => x === a && y === b)
            );
            if (neighbors.length > 0) {
            const pick = neighbors[Math.floor(Math.random() * neighbors.length)];
            const result = this.attack(enemyBoard, pick);
            if (result === 'hit') this.lastHit = pick;
            return pick;
            }
            this.lastHit = null;
        }
        const pick = this.randomAttack(enemyBoard);
        if (enemyBoard.hitShots.some(([a, b]) => a === pick[0] && b === pick[1])) {
            this.lastHit = pick;
        }
        return pick;
     }
}