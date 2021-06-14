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

console.log(computerPlay());