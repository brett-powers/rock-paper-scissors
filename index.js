// Create an array of rock paper scissors
const array = ['rock', 'paper', 'scissors'];


// Make a function that chooses R-P-S at random
function getComputerChoice() {
    const random = Math.floor(Math.random() * array.length)
    return array[random];
}


// Create a playerSelection variable that takes a string. should be case insensitive
const playerSelection = 'rock';


// Create a computer selection variable
const computerSeletion = getComputerChoice();


// Make a playRound function that plays the game and takes two parameters playerSelection and computerSeletion
function playRound(playerSelection, computerSeletion) {
    if (playerSelection === computerSeletion)
        return 'tie'

    else if (playerSelection === 'rock' && computerSeletion === 'scissors' ||
        playerSelection === 'scissors' && computerSeletion === 'paper' ||
        playerSelection === 'paper' && computerSeletion === 'rock')
        return 'Player Wins!';

    else (computerSeletion === 'rock' && playerSelection === 'scissors' ||
        computerSeletion === 'scissors' && playerSelection === 'paper' ||
        computerSeletion === 'paper' && playerSelection === 'rock')
    return 'Computer Wins'

}

console.log(playRound(playerSelection, computerSeletion));