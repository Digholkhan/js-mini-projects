const board = document.querySelector('#board');
const message = document.querySelector('#message');
let cells = Array(9).fill(''); let player = 'X'; let gameOver = false;
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function draw() {
    board.innerHTML = ''; cells.forEach((value, index) => {
        const cell = document.createElement('button'); cell.className = 'cell';
        cell.textContent = value; cell.addEventListener('click', () => play(index));
        board.appendChild(cell);
    });
}
function play(index) {
    if (cells[index] || gameOver) return; cells[index] = player;
    if (wins.some(line => line.every(i => cells[i] === player))) { message.textContent = `Player ${player} wins!`; gameOver = true; }
    else if (cells.every(Boolean)) { message.textContent = 'It is a draw!'; gameOver = true; } else { player = player === 'X' ? 'O' : 'X'; message.textContent = `Player ${player}'s turn`; } draw();
}
document.querySelector('#reset').addEventListener('click', () => {
    cells = Array(9).fill(''); player = 'X'; gameOver = false;
    message.textContent = "Player X's turn"; draw();
}); draw();