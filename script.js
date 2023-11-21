const letterDisplay = document.getElementById('letter-display');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.querySelector('.game-over-display');
const restartButton = document.querySelector('.restart-button');

let score = 0;
let gameOver = false;

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

function startGame() {
    gameOver = false;
    score = 0;
    updateScoreDisplay();
    gameOverDisplay.style.display = 'none';
    restartButton.style.display = 'none';
}

function gameOver() {
    gameOver = true;
    gameOverDisplay.style.display = 'block';
    restartButton.style.display = 'block';
}

function showLetter() {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    letterDisplay.textContent = randomLetter;
    setTimeout(() => {
        if (!gameOver) {
            letterDisplay.textContent = '';
            showLetter();
        }
    }, 2000);
}

document.addEventListener('keydown', (event) => {
    if (!gameOver && event.key === letterDisplay.textContent) {
        score++;
        updateScoreDisplay();
        showLetter();
    } else if (gameOver && event.key === 'r') {
        startGame();
    }
});

startGame();
showLetter();
