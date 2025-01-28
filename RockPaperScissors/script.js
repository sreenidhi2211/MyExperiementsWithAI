document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const userChoiceDisplay = document.querySelector('#user-choice span');
    const computerChoiceDisplay = document.querySelector('#computer-choice span');
    const resultDisplay = document.querySelector('#game-result span');
    const playAgainButton = document.getElementById('play-again');
    const resultSection = document.querySelector('.result');

    let userChoice;
    let computerChoice;
    const choicesMap = ['Rock', 'Paper', 'Scissors'];

    // Add event listeners to each choice button
    choices.forEach(choice => {
        choice.addEventListener('click', (event) => {
            userChoice = parseInt(event.target.getAttribute('data-choice'));
            userChoiceDisplay.textContent = choicesMap[userChoice];
            computerChoice = getComputerChoice();

            // Simulate a slight delay to show the computer's choice
            setTimeout(() => {
                computerChoiceDisplay.textContent = choicesMap[computerChoice];
                const result = determineWinner(userChoice, computerChoice);
                resultDisplay.textContent = result;

                // Fade-in effect for the result section
                resultSection.classList.add('fade-in');
                playAgainButton.style.display = 'block'; // Show play again button
            }, 500); // 0.5-second delay for computer choice reveal
        });
    });

    // Event listener for play again button
    playAgainButton.addEventListener('click', () => {
        resetGame();
    });

    // Function to get a random computer choice
    function getComputerChoice() {
        return Math.floor(Math.random() * 3); // Returns 0, 1, or 2
    }

    // Function to determine the winner
    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if ((user === 0 && computer === 2) || 
                   (user === 1 && computer === 0) || 
                   (user === 2 && computer === 1)) {
            return "You Won!";
        } else {
            return "Computer Won!";
        }
    }

    // Function to reset the game
    function resetGame() {
        userChoiceDisplay.textContent = '-';
        computerChoiceDisplay.textContent = '-';
        resultDisplay.textContent = '-';
        resultSection.classList.remove('fade-in'); // Remove fade-in class for reset
        playAgainButton.style.display = 'none'; // Hide play again button
    }
});
