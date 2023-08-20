const game_choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    return game_choices[Math.floor(Math.random() * 3)]
}

console.log(getComputerChoice());