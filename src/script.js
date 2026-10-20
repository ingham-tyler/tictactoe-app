let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let gameAcive = true;

const gameStatus = document.getElementById('game-status')
const gameBoard = document.getElementById('game-board')
const resetBtn = document.getElementById('reset-btn')

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function initBoard() {
    gameBoard.innerHTML = ''

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('data-index', i)
        cell.addEventListener('click', () => handleCellClick(i))
        gameBoard.appendChild(cell);
    }

    gameBoard.classList.add('painted-game-board')
}

function handleCellClick(index) {
    if (board[index] !== '' || !gameAcive) {
        return
    }

    board[index] = currentPlayer
    updateCellDisplay(index, currentPlayer)

    if (checkForWinner()) {
        gameStatus.textContent = `${currentPlayer} wins!`
        gameAcive = false
    } else if (checkForDraw()) {
        gameStatus.textContent = 'It\'s a draw!'
        gameAcive = false
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        gameStatus.textContent = `Player ${currentPlayer}'s turn`
    }
}

function updateCellDisplay(index, playerSymbol) {
    const cell = document.querySelector(`[data-index="${index}"]`)
    cell.textContent = playerSymbol
}

function checkForWinner() {
    for (const condition of winningConditions) {
        const [a,b,c] = condition
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return true
        }
    }

    return false
}

function checkForDraw() {
    return board.every(cell => cell !== '')
}

function resetGame() {
    board = ['','','','','','','','','',]
    currentPlayer = 'X'
    gameAcive = true
    gameStatus.textContent = `Player X's turn`
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.textContent = '')
}

document.addEventListener('DOMContentLoaded', () => {
    initBoard();
    resetBtn.addEventListener('click', resetGame)
})
