import Ship from './ship';

test ('ship has length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});

test ('new ship has 0 hits', () => {
    const ship = new Ship(3);
    expect(ship.hits).toBe(0);
});

test ('hit() increases hits by 1', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('ship is not sunk when new', () => {
    expect(new Ship(2),isSunk()).toBe(false);
});

test ('ship is not sunk with fewer hits than length', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test ('ship is sunk when hits equal length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

