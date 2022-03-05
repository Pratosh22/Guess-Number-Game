'use strict';
const message=document.querySelector('.message');
const checkButton=document.querySelector('.check');
const randomNumber=Math.floor(Math.random()*20);
const again=document.querySelector('.again');
let score=20;

checkButton.addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    
    if(guess==randomNumber){
        message.textContent='You are right!';
        document.querySelector('.highscore').textContent=score;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=randomNumber;
    }

    else if(guess<randomNumber){
        message.textContent='Too low!';
        score=score-1;
        document.querySelector('.score').textContent=score;
    }
    
    else if(guess>randomNumber){
        if(score>0){
        message.textContent='Too high!';
        score=score-1;
        document.querySelector('.score').textContent=score;
        
        }
        else {
            message.textContent='You lose!';
        }   
    }
    if(score==0){
        again.textContent='Play again?';
        again.addEventListener('click',function(){
            location.reload();
        });
    }
});
        

    
