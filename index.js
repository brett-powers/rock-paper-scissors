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


