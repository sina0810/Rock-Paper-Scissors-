const { viewStats, playRound, computerChoice, roundWinner } = require('./gameStats.js');
const { gameStats } = require('./gameStats.js')

const prompt = require('prompt-sync')();

const showMenu = () => {     
  let isRunning = true;
  while (isRunning) {
    console.log("\nMenu:");
    console.log("1. Play Round");
    console.log("2. View Stats ");
    console.log("3. Exit");

    const choice = prompt("Choose an option: ");

    if (choice === "1") {
      let playerChoice = playRound();
      if (playerChoice === null){
        continue;
      }
      let computerPick = computerChoice();
      let resultMessage = roundWinner(playerChoice, computerPick);
        console.log(`You chose: ${playerChoice}
        Computer chose: ${computerPick}
          ${resultMessage}`);
    } else if (choice === "2") {
      viewStats();
    } else if (choice === "3") {
      console.log("Goodbye!");
      isRunning = false;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
};

module.exports = { showMenu };