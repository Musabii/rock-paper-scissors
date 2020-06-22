let playerScore = 0;
let computerScore = 0;
let timesPlayed = 0;

function computerPlay() {
    return Math.floor(Math.random() *  3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        timesPlayed++;
        return "It's a Tie!"
    } else if (playerSelection == 0 && computerSelection == 1 || playerSelection == 1 && computerSelection == 0) {
        if (playerSelection == 0) {
            return playerLose("Paper", "Rock");
        } else {
            return playerWin("Paper", "Rock");
        }
    } else if (playerSelection == 0 && computerSelection == 2 || playerSelection == 2 && computerSelection == 0) {
        if (playerSelection == 0) {
            return playerWin("Rock", "Scissor");
        } else {
            return playerLose("Rock", "Scissor");
        }
    } else {
        if (playerSelection == 2) {
            return playerWin("Scissor", "Paper");
        } else {
            return playerLose("Scissor", "Paper");
        }
    }
}

function playerWin(win, lose) {
    playerScore++;
    timesPlayed++;
    return `You Win! ${win} beats ${lose}.`;
}

function playerLose(win, lose) {
    computerScore++;
    timesPlayed++;
    return `You Lose! ${win} beats ${lose}.`;
}


function gameEnd() {
    let gameResult;

    if(timesPlayed != 5) return '';

    if (playerScore > computerScore) {
        gameResult = "Player wins!";
    } else if (computerScore > playerScore) {
        gameResult = "Computer wins!";
    } else {
        gameResult = "It's a Tie!"
    }
    
    timesPlayed = 0;
    return "score is " + playerScore + " : " + computerScore + ". " + gameResult;
}

buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', clickButton));

function clickButton () {
    results = document.getElementById('results');
    if (timesPlayed == 0) {
        results.innerHTML = ''; 
        playerScore = 0;
        computerScore = 0;
    }
    results.innerHTML +=  playRound(this.getAttribute('data-key'), computerPlay()) + "<br/>" + gameEnd();
    console.log(this.getAttribute('data-key'));
    
}