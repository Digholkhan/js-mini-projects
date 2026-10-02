const choices = ['rock', 'paper', 'scissors']; let playerScore = 0; let computerScore = 0; const result = document.querySelector('#result');
document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
    const player = button.dataset.choice;
    const computer = choices[Math.floor(Math.random() * 3)];
    let message = `You chose ${player}. Computer chose ${computer}. `;
    if (player === computer) message += 'Draw!';
    else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerScore++; message += 'You win!';

    } else { computerScore++; message += 'Computer wins!'; } result.textContent = `${message} Score: ${playerScore} - ${computerScore}`;
}));