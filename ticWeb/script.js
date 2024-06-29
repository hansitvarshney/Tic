// Check if on game.html and initialize accordingly
if (window.location.pathname.includes('game.html')) {
    let cells = Array(9).fill(null);
    let currentPlayer = 'X';

    window.onload = function() {
        document.querySelectorAll('.cell').forEach((cell, index) => {
            cell.onclick = () => makeMove(cell, index);
        });
        document.querySelector('.status').textContent = 'Turn: X';
    };

    function makeMove(cell, index) {
        if (cells[index] || checkWinner()) {
            return;
        }
        cells[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            document.querySelector('.status').textContent = `Winner: ${currentPlayer}`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.querySelector('.status').textContent = `Turn: ${currentPlayer}`;
        }
    }

    function checkWinner() {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return true;
            }
        }
        return false;
    }
}