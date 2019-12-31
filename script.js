let roundCount = 0;
let winCount = 0;
let loseCount = 0;
let playerHand = '';
let computerHand = '';
let playRoundMessage = '';

function computerPlay() {
    let randomNumber = Math.random() * 3
    if (randomNumber <= 1) {
        return 'rock';
    } else if (randomNumber <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // console.log('Round started')
    // console.log(`${playerSelection}, ${computerSelection}`)
    playerHand = playerSelection;
    computerHand = computerSelection;

    roundCount++;
    let result;

    if (playerSelection === computerSelection) {
        result = 'draw'
    } else {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection === 'paper') {
                    result = 'lose'
                } else {
                    result = 'win'
                }
                break;
            case 'paper':
                if (computerSelection === 'rock') {
                    result = 'win'
                } else {
                    result = 'lose'
                }
                break;
            case 'scissors':
                if (computerSelection === 'rock') {
                    result = 'lose'
                } else {
                    result = 'win'
                }
                break;
        }
    }

    if (result === 'win') {
        winCount += 1;
    } else if (result === 'lose') {
        loseCount += 1;
    }

    return message(result, playerSelection, computerSelection);
}

function message(result, player, computer) {
    // console.log('Message printed')
    player = player[0].toUpperCase() + player.slice(1);
    computer = computer[0].toUpperCase() + computer.slice(1);
    if (result === 'win') {
        return playRoundMessage = 'You Win! ' + player + ' beats ' + computer;
    } else if (result === 'lose') {
        return playRoundMessage = 'You Lose! ' + computer + ' beats ' + player;
    } else {
        return playRoundMessage = 'Draw'
    }
}

function gameOver() {
    console.log('win' + winCount);
    console.log('lose' + loseCount);
    if (winCount === 5 || loseCount === 5) {
        winCount = 0;
        loseCount = 0;
        return true;
    } else {
        return false;
    }
}

const selections = document.querySelectorAll('.selection');

const container = document.querySelector('#container');

const player = document.createElement('div');
const computer = document.createElement('div');
const result = document.createElement('div');
const win = document.createElement('div');

selections.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        // console.log(e.target.id);
        playRound(e.target.id, computerPlay());
        player.textContent = 'Player: ' + playerHand;
        computer.textContent = 'Computer: ' + computerHand;
        result.textContent = playRoundMessage;

        container.appendChild(player);
        container.appendChild(computer);
        container.appendChild(result);


        if (gameOver()) {
            if (winCount === 5) {
                win.textContent = `You won`
            } else {
                win.textContent = 'You lose'
            }
            container.appendChild(win);
            selections.forEach((selection) => {
                selection.remove()
            })
        }

    });
});








