const prompt = require('prompt-sync')();

const showMenu = () => {
  console.log("Menu:");
  console.log("1. [First Option]");
  console.log("2. [Second Option]");
  console.log("3. Exit");

  const choice = prompt("Choose an option: ");
  console.log(`You chose: ${choice}`);
};

module.exports = { showMenu };