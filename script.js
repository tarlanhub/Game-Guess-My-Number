'use strict';



// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent  = 'Correct Number'
// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent= 10


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20 +1 );
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent =message;
}
document.querySelector('.again').addEventListener('click',
function(){ 
  
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = ' Start Guessing !';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').style.fontSize = '2rem';
    secretNumber = Math.trunc(Math.random() * 20 +1 );
    score = 20 ;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

})
document.querySelector('.check').addEventListener('click',
function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
    //  document.querySelector('.message').textContent = 'NO NUMBER';
    displayMessage('No Number');
    }else if ( guess === secretNumber) {
        
        if (score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.number').textContent = secretNumber;


        // document.querySelector('.message').textContent = ' You Win !';
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').style.fontSize = '5rem';
    } 
    
    else if(guess !== secretNumber){

        if (score > 1 ){
            document.querySelector('.message').textContent = guess > secretNumber ?
             'too High' : 'too Low' ;
            score--;
            document.querySelector('.score').textContent = score; 
            
        }else {
            document.querySelector('.message').textContent = 'you lost  the game';
            document.querySelector('.score').textContent = 0;
    }
    
    
}
})
