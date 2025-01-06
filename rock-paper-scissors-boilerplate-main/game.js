// Variable Declarations
let yourScore = document.getElementById("your-score");
let compScore = document.getElementById("comp-score");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let yourImage = document.getElementById("your-image");
let compImage = document.getElementById("comp-image");
let yourScoreValue = 0;
let compScoreValue = 0;
let resultModal = document.getElementById("result-modal");
let resultMessage = document.getElementById("result-message");
let gameButtons = document.querySelectorAll(".options button");
let playButton = document.getElementById("play-button");


// Array of images
const imageArray = [
  "./assets/paper-hand.png",
  "./assets/rock-hand.png",
  "./assets/scissors-hand.png",
];

// Main function
function mainfunc(yourChoice) {
  yourImage.src = imageArray[yourChoice];
  let compChoice = Math.floor(Math.random() * 3);
  compImage.src = imageArray[compChoice];

  // Highlight winner
  resetHighlights();
  highlightWinner(yourChoice, compChoice);

  // Determine winner
  switch (compChoice) {
    case 0: // Computer: Paper
      if (yourChoice === 0) {
        setMessage("It's a Draw!");
      } else if (yourChoice === 1) {
        compScoreValue++;
        setMessage("Computer Wins!");
      } else {
        yourScoreValue++;
        setMessage("You Win!");
      }
      break;

    case 1: // Computer: Rock
      if (yourChoice === 0) {
        yourScoreValue++;
        setMessage("You Win!");
      } else if (yourChoice === 1) {
        setMessage("It's a Draw!");
      } else {
        compScoreValue++;
        setMessage("Computer Wins!");
      }
      break;

    case 2: // Computer: Scissors
      if (yourChoice === 0) {
        compScoreValue++;
        setMessage("Computer Wins!");
      } else if (yourChoice === 1) {
        yourScoreValue++;
        setMessage("You Win!");
      } else {
        setMessage("It's a Draw!");
      }
      break;

    default:
      setMessage("Invalid Choice!");
  }

  // Check if the game has ended
  if (yourScoreValue >= 5 || compScoreValue >= 5) {
    endGame();
  }

  updateScores();
}

// Highlight the winner
function highlightWinner(yourChoice, compChoice) {
  if (yourChoice !== compChoice) {
    if (
      (yourChoice === 0 && compChoice === 2) || // Paper beats Scissors
      (yourChoice === 1 && compChoice === 0) || // Rock beats Paper
      (yourChoice === 2 && compChoice === 1)    // Scissors beats Rock
    ) {
      yourImage.parentElement.classList.add("highlight-winner");
    } else {
      compImage.parentElement.classList.add("highlight-winner");
    }
  }
}

// Reset highlights
function resetHighlights() {
  yourImage.parentElement.classList.remove("highlight-winner");
  compImage.parentElement.classList.remove("highlight-winner");
}

// Set message
function setMessage(message) {
  resultMessage.textContent = message;
}

// Update scores
function updateScores() {
  yourScore.textContent = yourScoreValue;
  compScore.textContent = compScoreValue;
}

// End Game
function endGame() {
  resultModal.style.display = "block";
  resultMessage.textContent = yourScoreValue > compScoreValue ? "You Won the Game!" : "Computer Won the Game!";
  disableGameButtons();
}

// Disable game buttons
function disableGameButtons() {
  gameButtons.forEach((button) => {
    button.disabled = true;
  });
}

// Reset Game
playButton.addEventListener("click", function () {
  window.location.reload();
});

// Event Listeners
rockButton.addEventListener("click", () => mainfunc(1));
paperButton.addEventListener("click", () => mainfunc(0));
scissorsButton.addEventListener("click", () => mainfunc(2));
