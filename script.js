const display = document.getElementById('display');
const scoreDisplay = document.getElementById('score');
const replayButton = document.getElementById('replay');
let score = 0;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let randomLetter = letters[Math.floor(Math.random() * letters.length)];
display.textContent = randomLetter;

document.body.onkeyup = function(e) {
    if(e.key === randomLetter) {
        score++;
        scoreDisplay.textContent = score;
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        display.textContent = randomLetter;
    } else {
        alert('Perdu! Votre score était de ' + score + '.');
        score = 0;
        scoreDisplay.textContent = score;
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        display.textContent = randomLetter;
    }
};

replayButton.onclick = function() {
    score = 0;
    scoreDisplay.textContent = score;
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    display.textContent = randomLetter;
};
