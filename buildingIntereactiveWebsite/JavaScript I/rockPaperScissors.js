// hardcoded userInput for this exercise
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Something is wrong";
  }
};

// randomize computerChoice
const randomizedNum = Math.floor(Math.random() * 3);

// initiate computerChoice
let computerChoice;
if (randomizedNum === 0) {
  computerChoice = "rock";
} else if (randomizedNum === 1) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

const game = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    return "It's a tie!";
  } else if (
    (userInput === "rock" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice == "scissors") ||
    (userInput === "scissors" && computerChoice === "rock")
  ) {
    return "You lose!";
  } else if (
    userInput === "bomb" ||
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "paper" && computerChoice == "rock") ||
    (userInput === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Something is wrong...";
  }
};

const playGame = () => {
  // your choice
  userInput = getUserChoice("bomb");

  console.log("You choose: ", userInput);
  console.log("Computer choose: ", computerChoice);
  console.log(game(userInput, computerChoice));
};

playGame();
