'use strict';
let score =10;
let highscore=0;
document.querySelector('.highscore').textContent=highscore;
document.querySelector('.message').textContent='start guessing';
const secrtnumber =Math.trunc(Math.random()*10)+1;
document.querySelector('.number').textContent=secrtnumber;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function(){
    const guess=document.querySelector('.guess').value;
    if(!guess){

        document.querySelector('.message').textContent='enter a number';
    }
 else if (guess==secrtnumber) {
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent='greet jooop';
    document.querySelector('body').style.backgroundColor ='#60b347';
    document.querySelector('.number').style.width ='50rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    }
else {

    document.querySelector('.message').textContent= guess>secrtnumber? 'too high' : 'to low';
   
   
   score--;
    document.querySelector('.score').textContent = score;
    
}  
})
//reset the game again
document.querySelector('.again').addEventListener('click',function(){

document.querySelector('body').style.backgroundColor='#222'
document.querySelector('.message').textContent='start guessing';
document.querySelector('.score').textContent = '10';
highscore=0;
document.querySelector('.highscore').textContent=highscore;
})