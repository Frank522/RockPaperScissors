const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const startBtn = document.querySelector('#start');
const outputdiv = document.querySelector('.results');
const resultNode = document.createElement('p');

let startFunction = (e) => {
    if(e.target.innerText == 'start') {
        startGame();
    }
};

startBtn.addEventListener('click', startFunction);

let computerPlay = () => {
    let value = 3 * Math.random();
    if(value < 1) {
        return 'scissors';
    } else if(value < 2){
        return 'rock';
    } else{
        return 'paper';
    }
};

let playRound = (playerSelection, computerSelection) => {
    switch(playerSelection){
        case "scissors":
            switch(computerSelection) {
                case "scissors":
                    return "It's a tie";
                case "rock":
                    return "You lose";
                case "paper":
                    return "You win";
            }
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "It's a tie";
                case "paper":
                    return "You lose";
                case "scissors":
                    return "You win";
            }
        case "paper":
            switch(computerSelection) {
                case "paper":
                    return "It's a tie";
                case "scissors":
                    return "You lose";
                case "rock":
                    return "You win";
            }
    }
};

let rpsPress = (e) => {
    let computerSelection = computerPlay();
    let playerSelection = e.target.innerText;
    let result = playRound(playerSelection, computerSelection);
    let resultString = "You chose " + playerSelection + ", Opponent chose " + computerSelection + "! " + result + "!";
    resultNode.innerText = resultString;
    outputdiv.appendChild(resultNode);
    updateGame(result);
};

function startGame(){
    window.removeEventListener('click', startFunction);
    wins.innerText = 0;
    losses.innerText = 0;
    rockBtn.addEventListener('click', rpsPress);
    paperBtn.addEventListener('click', rpsPress);
    scissorsBtn.addEventListener('click', rpsPress);
};

let updateGame = (result) => {
    switch(result){
        case "You win":
            wins.innerText = +wins.innerText + 1;
            break;   
        case "It's a tie":
            break;
        case "You lose":
            losses.innerText = +losses.innerText + 1;
            break;
    }

    if(wins.innerText == 5 || losses.innerText == 5) {
        endGame();
    }
};

let endGame = () => {
    rockBtn.removeEventListener('click', rpsPress);
    paperBtn.removeEventListener('click', rpsPress);
    scissorsBtn.removeEventListener('click', rpsPress);
    startBtn.addEventListener('click', startFunction);

    if(wins.innerText == 5){
        resultNode.innerText += "\n Congratulations, you have beaten the computer!";
        outputdiv.appendChild(resultNode);
    } else {
        resultNode.innerText += "\n Sorry, you have been beaten by the computer!";
        outputdiv.appendChild(resultNode);
    }
};




