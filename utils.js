const startButton = document.getElementById('button1');
const resetButton = document.getElementById('button2');
const guessButton = document.getElementById('button3');
const input1 = document.getElementById('input-1');
const container1 = document.getElementById('hidden-stuff');
const section1 = document.getElementById('container2');
const youGot = document.getElementById('hidden-text');
const guessesLeft = document.getElementById('hidden-guessL');
const chancesText = document.getElementById('hidden-chancesL');
const guessANum = document.getElementById('guess-');
const prevNum = document.getElementById('guess-num');





let target;
let counter = 0;
let userInput = 0;

export function start() {
    target = Math.floor(Math.random() * 20) + 1;
    input1.style.visibility = 'visible';
    guessButton.style.visibility = 'visible';
    guessANum.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
    container1.style.visibility = 'visible';
    section1.style.visibility = 'visible';
    guessANum.textContent = 'Guess a number!';
    return;
}


