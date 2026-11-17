export function renderBoard(container, gameboard, showShips, onClick) {
  container.innerHTML = '';
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      const isHit = gameboard.hitShots.some(([a, b]) => a === r && b === c);
      const isMiss = gameboard.missedShots.some(([a, b]) => a === r && b === c);
      const isShip = gameboard.ships.some((s) =>
        s.coords.some(([a, b]) => a === r && b === c)
      );

      if (isHit) cell.classList.add('hit');
      else if (isMiss) cell.classList.add('miss');
      else if (showShips && isShip) cell.classList.add('ship');

      if (onClick) cell.addEventListener('click', () => onClick([r, c]));
      container.appendChild(cell);
    }
  }
}

export function showMessage(text) {
  document.getElementById('message').textContent = text;
}