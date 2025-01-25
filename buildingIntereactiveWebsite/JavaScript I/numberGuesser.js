let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
  }
  const getAbsoluteDistance = () => Math.abs(userGuess - targetNumber) <= Math.abs(computerGuess - targetNumber);
  return getAbsoluteDistance;
};

const updateScore = (str) => {
  if (str === 'human') {
    humanScore++;
  } else if (str === 'computer') {
    computerScore++;
  } else {
    throw new Error('Invalid player type. Must be "human" or "computer".');
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};


