const game_choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    return game_choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Tie!'
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                return 'You Lose! Rock loses to Paper'
            }
            return 'You Win! Rock beats Scissors'
        case 'paper':
            if (computerSelection == 'scissors') {
                return 'You Lose! Paper loses to Scissors'
            }
            return 'You Win! Paper beats Rock'
        case 'scissors':
            if (computerSelection == 'rock') {
                return 'You Lose! Scissors loses to Rock'
            }
            return 'You Win! Scissors beats Paper'
        default:
            return 'Unknown player selection'
    }
}