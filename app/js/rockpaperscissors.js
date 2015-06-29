////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//getPlayerMove which (unless a move is provided as a parameter) prompts the user for input
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    if (move) {
        // If a `move` has a value, your expression should evaluate to that value.
        return move
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    } else {
        return getInput()
    }
}

//getComputerMove which (unless a move is provided as a parameter) generates a random move for the computer
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    if (move) {
    // If a `move` has a value, your expression should evaluate to that value.
        return move
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    } else {
        return getInput ()
    }
}

//getWinner which takes two parameters (representing the player's and computer's moves, respectively) and evaluates to either 'player', 'computer', or 'tie' based on the moves that the player and computer are making.
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
      if (playerMove === computerMove){
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'sissors'){
        winner = 'player';
    }
    else if (playerMove === 'sissors' && computerMove === 'paper'){
        winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    }
    else {
        winner = 'computer';
    }
    return winner;
}

//playToFive which runs the Rock Paper Scissors game until either the player or the computer has won five times.
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times
    while ((playerWins < 5) && (computerWins < 5))
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
    
    var winner = getWinner(playerMove, computerMove);
    if (winner == 'player') {
        playerWins+=1;
        console.log("You won! Play again.")
    }
    else if (winner == 'computer') {
        computerWins+=1;
        console.log("You lost. Play again.");
    }    
    else (winner == 'tie') {
        console.log("It's a tie! Play again.")
    }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + 'to' + computerWins + '\n');
    return [playerWins, computerWins];
}

