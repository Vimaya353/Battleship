import './style.css';
import Game from './game';
import { renderBoard, showMessage } from './dom';

let game = new Game();

function render() {
  renderBoard(document.getElementById('player-board'), game.human.gameboard, true, null);
  renderBoard(
    document.getElementById('enemy-board'),
    game.computer.gameboard,
    false,
    handleAttack
  );
}

function handleAttack(coord) {
  if (game.winner) return;
  try {
    game.playTurn(coord);
  } catch (e) {
    showMessage('You already shot there!');
    return;
  }
  render();
  if (game.winner) showMessage(`${game.winner.name} won!`);
  else showMessage('');
}

document.getElementById('restart').addEventListener('click', () => {
  game = new Game();
  showMessage('');
  render();
});

document.getElementById('randomize').addEventListener('click', () => {
  game.human.gameboard.randomizeShips();
  render();
});

render();