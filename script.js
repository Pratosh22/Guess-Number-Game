'use strict';
let score = 20;
let highscore=0;
let randomNumber = Math.floor(Math.random() * 20);
const message = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const again = document.querySelector('.again');
checkButton.addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;

    if (guess == randomNumber) {
        message.textContent = 'You are right!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randomNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if (guess < randomNumber) {
        message.textContent = 'Too low!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }

    else if (guess > randomNumber) {
        if (score > 0) {
            message.textContent = 'Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;

        }
        else {
            message.textContent = 'You lose!';
        }
    }
    if (score == 0) {
        again.textContent = 'Play again?';
        again.addEventListener('click', function () {
            location.reload();
        });
    }
});
again.addEventListener('click', function () {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
