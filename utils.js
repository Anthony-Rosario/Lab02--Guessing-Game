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


export function guessNumber() {
    userInput = Number(input1.value);

    if (isNaN(userInput) || userInput < 1 || userInput > 20){
        return;
    }
    
    let compareNum = compareN(userInput, target);
    changeView(compareNum);

    input1.value = '';
}



function guessCounter(){
    counter++;
    guessesLeft.textContent = 4 - counter; 
}



export function compareN(userInput, target) {
    if (userInput === target) {
        return 0;
    } else if (userInput > target) {
        return 1;
    } else if (userInput < target) {
        return -1;
    }
}


function success(){
    guessANum.textContent = `Hoorraayyy! You guessed the correct value of ${target}!`;
    guessButton.style.visibility = 'hidden';
    input1.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    youGot.textContent = 'You guessed right';
    guessesLeft.textContent = counter;
    chancesText.textContent = 'Attempts Remaining!';
    prevNum.textContent = '';
    return;
}


function failure(){
    guessANum.textContent = `Sorry, you did not guess the correct value of ${target}.`;
    guessButton.style.visibility = 'hidden';
    input1.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    prevNum.textContent = '';
    return;
}


function endGame(compareR){
    if (counter === 4){
        if (compareR !== 0) {
            failure();
        } else {
            success();
        }
        return;
    }
}