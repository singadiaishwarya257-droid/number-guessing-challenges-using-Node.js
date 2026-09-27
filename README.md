# Number Guessing Game using Node.js

A simple command-line game where the program generates a random number between 1 and 100, and the user must guess it.

## How it works
- The program picks a random number between 1 and 100.
- The player enters a guess.
- If the guess is incorrect, the program tells the player whether the guess is too high or too low.
- The game continues until the correct number is guessed.
- When the user wins, the program prints the total number of attempts.

## Run the game
```bash
node index.js
```

## Example
```text
Welcome to the Number Guessing Game!
Guess a number between 1 and 100: 50
Too low! Try again.
Guess a number between 1 and 100: 75
Too high! Try again.
Guess a number between 1 and 100: 63
Correct! You guessed the number in 3 attempt(s).
```
