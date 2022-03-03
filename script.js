'use strict';
const message=document.querySelector('.message');
const checkButton=document.querySelector('.check');
const randomNumber=Math.floor(Math.random()*20);
let score=20;

checkButton.addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    const updateScore=document.querySelector('.score').value;
    if(guess==randomNumber){
        message.textContent='You are right!';
    }
    else if(guess<=randomNumber){
        message.textContent='Too low!';
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
    else{
        message.textContent='Too high!';
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
});

    
