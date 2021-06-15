function computerPlay()  {
    let value = 3 * Math.random();
    if(value < 1) {
        return "scissors";
    } else if(value < 2){
        return "rock";
    } else{
        return "paper";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    switch(playerSelection){
        case "scissors":
            switch(computerSelection) {
                case "scissors":
                    return "Tie, " + playerSelection + " ties with " + computerSelection;
                case "sock":
                    return "You Lose, " + computerSelection + " beats " + playerSelection;
                case "paper":
                    return "You Win, " + playerSelection + " beats " + computerSelection;
            }
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "Tie, " + playerSelection + " ties with " + computerSelection;
                case "paper":
                    return "You Lose, " + computerSelection + " beats " + playerSelection;
                case "scissors":
                    return "You Win, " + playerSelection + " beats " + computerSelection;
            }
        case "paper":
            switch(computerSelection) {
                case "paper":
                    return "Tie, " + playerSelection + " ties with " + computerSelection;
                case "scissors":
                    return "You Lose, " + computerSelection + " beats " + playerSelection;
                case "rock":
                    return "You Win, " + playerSelection + " beats " + computerSelection;
            }
    }
}




function PlayGame(){
    for(let i=0; i<5; i++){
        let playerChoice = prompt("Rock, Paper or Scissors: ");
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

PlayGame();