function computerPlay()  {
    let value = 3 * Math.random();
    if(value < 1) {
        "Scissors"
    } else if(value < 2){
        return "Rock";
    } else{
        return "Paper";
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "Scissors":
            switch(computerSelection) {
                case "Scissors":
                    return "Tie!" + playerSelection + " ties with " + computerSelection;
                case "Rock":
                    return "You Lose!" + computerSelection + " beats " + playerSelection;
                case "Paper":
                    return "You Win!" + playerSelection + " beats " + computerSelection;
            }
        case "Rock":
            switch(computerSelection) {
                case "Rock":
                    return "Tie!" + playerSelection + " ties with " + computerSelection;
                case "Paper":
                    return "You Lose!" + computerSelection + " beats " + playerSelection;
                case "Scissors":
                    return "You Win!" + playerSelection + " beats " + computerSelection;
            }
        case "Paper":
            switch(computerSelection) {
                case "Paper":
                    return "Tie!" + playerSelection + " ties with " + computerSelection;
                case "Scissors":
                    return "You Lose!" + computerSelection + " beats " + playerSelection;
                case "Rock":
                    return "You Win!" + playerSelection + " beats " + computerSelection;
            }
    }
}


console.log(computerPlay());