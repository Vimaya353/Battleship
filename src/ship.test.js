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