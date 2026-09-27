const readline = require('readline');

const MIN = 1;
const MAX = 100;
const secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askGuess() {
  rl.question(`Guess a number between ${MIN} and ${MAX}: `, (input) => {
    const guess = Number(input);

    if (!Number.isInteger(guess) || guess < MIN || guess > MAX) {
      console.log(`Please enter a valid whole number between ${MIN} and ${MAX}.`);
      askGuess();
      return;
    }

    attempts += 1;

    if (guess === secretNumber) {
      console.log(`Correct! You guessed the number in ${attempts} attempt(s).`);
      rl.close();
      return;
    }

    if (guess > secretNumber) {
      console.log('Too high! Try again.');
    } else {
      console.log('Too low! Try again.');
    }

    askGuess();
  });
}

console.log('Welcome to the Number Guessing Game!');
askGuess();
