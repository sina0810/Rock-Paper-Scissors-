const prompt = require('prompt-sync')();

const gameStats = { wins: 0, losses: 0, ties: 0, total: 0};

const viewStats = () => {
    console.log("\nCurrent Statistics:");
    console.log(`Games Won: ${gameStats.wins}`);
    console.log(`Game Losses: ${gameStats.losses}`);
    console.log(`Game Ties: ${gameStats.ties}`);
    const total = gameStats.wins + gameStats.losses + gameStats.ties;
    console.log(`Total games: ${total}`);

    let winRate = 0

    if (total > 0){
        winRate = Math.round((gameStats.wins / total) * 100)
    }
    console.log(`Game Rate: ${winRate}%`)
}

const playRound = () => {
     const userChoice = prompt('Choose rock, paper, or scissors')
     const cleaned = userChoice.trim().toLowerCase();

    const playTools = ["rock", "paper", "scissors"];

     if (!playTools.includes(cleaned)){
        console.log('Please choose valid choice!')
        return null;
     }
     return cleaned;
}

const computerChoice = () => {
    const computerOnlyChoice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * computerOnlyChoice.length)
    return computerOnlyChoice [randomChoice];
}

const roundWinner = (playRound , computerChoice ) => {
   
    if (playRound === computerChoice ){
        gameStats.ties++
        return `Both chose ${playRound}. It's a tie.`;
    } if (playRound === "rock" && computerChoice === "scissors"){
        gameStats.wins++;
        return `Rock beats scissors! You win!`
    } if (playRound === "scissors" && computerChoice === "paper"){
        gameStats.wins++;
        return `Scissors beats paper! You win!`
    } if (playRound === "paper" && computerChoice === "rock"){
        gameStats.wins++;
        return `Paper beats rock! You win!`
    } 
        gameStats.losses++;
        
  if (computerChoice === "rock" && playRound === "scissors") {
    return "Rock beats scissors! Computer wins!";
  }

  if (computerChoice === "scissors" && playRound === "paper") {
    return "Scissors beats paper! Computer wins!";
  }

  return "Paper beats rock! Computer wins!";
};  

module.exports = {gameStats, viewStats, playRound, computerChoice, roundWinner};