import Ship from './ship';

test ('ship has length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});