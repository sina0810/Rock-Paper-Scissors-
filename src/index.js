const { showMenu } = require('./menu.js');

 const startApp = () => {
   console.clear();
   console.log("Welcome to Funny Game!");
   showMenu();
   console.log("\nGoodbye!");
 }

 startApp();