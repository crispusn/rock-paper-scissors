
    let playerSelection;
    let computerSelection; 
    let playerScore=0;
    let computerScore=0;
    let drawScore;
    const buttons = document.querySelectorAll('input')


   function computerPlay(){

          let moves = ['Rock', 'Paper', 'Scissors'];
          let move = moves[Math.floor(Math.random()*moves.length)];
          return move;     
   }

   function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

   function playRound(playerSelection){
 

 computerSelection = computerPlay().toLowerCase();
let result = ""


 if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>Player Won The Game!'
           

            disableButtons()
          
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('Tie Game! Both Select ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>Computer Won The Game!'
            
            disableButtons()
            

        }
    }
   
    document.getElementById('results').innerHTML = result
    return
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
  