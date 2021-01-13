import { start, resetGame, guessNumber } from './utils.js';

const startButton = document.getElementById('button1');
const resetButton = document.getElementById('button2');
const guessButton = document.getElementById('button3');

startButton.addEventListener('click', () => {
    start();
});

resetButton.addEventListener('click', () => {
    resetGame();
});

guessButton.addEventListener('click', () => {
    guessNumber();
});