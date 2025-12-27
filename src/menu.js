const { viewStats } = require('./gameStats.js');
// const { gameStats } = require('./gameStats.js')

const prompt = require('prompt-sync')();

const showMenu = () => {     
  let isRunning = true;
  while (isRunning) {
    console.log("\nMenu:");
    console.log("1. [Play Round]");
    console.log("2. [ View Stats ]");
    console.log("3. Exit");

    const choice = prompt("Choose an option: ");

    if (choice === "1") {
      console.log("You chose option 1");
      playRound();
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