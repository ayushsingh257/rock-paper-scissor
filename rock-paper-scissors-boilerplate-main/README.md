# Rock Paper Scissors Game Development

## Step-by-Step Plan for Hour 2

### 1. Game Logic: Deciding the Winner

First things first, we need to figure out who wins each round. The player’s choice and the computer’s random choice are compared using simple if-else statements (or a switch-case if you prefer). Here’s how it works:

Rock crushes Scissors.
Scissors cut Paper.
Paper wraps Rock.
If both choices are the same, it’s a tie.

### 2. Scorekeeping: Tracking Progress

- Add variables to track scores for the player and the computer (`playerScore` and `computerScore`).
- Update and display these scores after every round.

### 3. User Interface Updates

- Display the player's choice, computer's choice, and the result (win, lose, or tie) in the UI.
- Show the current score directly on the screen.

### 4. Adding a Reset or Play Again Button

To keep players coming back for more, add a “Play Again” or “Reset” button. This lets them either start a new game or reset the score whenever they want.

### 5. Enhancements for User Experience

- Add animations or visual effects, such as:
  - Highlighting the winning choice.
  - Displaying messages like "You Win!" or "Computer Wins!".
- Use tooltips or labels to guide the user on how to play.

### 6. Error Handling and Edge Cases

Finally, we need to handle any unexpected situations. Make sure:

Only valid inputs (Rock, Paper, or Scissors) are allowed.
You have a default case ready for any weird or invalid inputs.
