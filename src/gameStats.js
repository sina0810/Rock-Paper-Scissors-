const gameStats = { wins: 0, losses: 0, ties: 0};

const viewStats = () => {
    console.log("\nCurrent Statistics:");
    console.log(`Games Won: ${gameStats.wins}`);
    console.log(`Game Losses: ${gameStats.losses}`);
    console.log(`Game Ties: ${gameStats.ties}`);
    const total = gameStats.wins + gameStats.losses + gameStats.ties;
    console.log(`${total}`);

}

const playRound = () => {
    const userChoice = prompt('Choose rock, paper, or scissors')
    let cleaned = userChoice.trim().toLowerCase();

    let playTools = ["rock", "paper", "scissors"];
     if (!playTools.includes(cleaned)){
        console.log('Please choose valid choice!')
        return;
     } else if (playTools.includes(cleaned)){
        return cleaned;
     }

}

const computerChoice = () => {
    const computerOnlyChoice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * computerOnlyChoice.length)
    return computerOnlyChoice [randomChoice];
}
console.log(computerChoice());

module.exports = {gameStats, viewStats, playRound, computerChoice};