const gameStats = { wins: 0, losses: 0, ties: 0};

const viewStats = () => {
    console.log("\nCurrent Statistics:");
    console.log(`Games Won: ${gameStats.wins}`);
    console.log(`Game Losses: ${gameStats.losses}`);
    console.log(`Game Ties: ${gameStats.ties}`);
    const total = gameStats.wins + gameStats.losses + gameStats.ties;
    console.log(`${total}`);

}

module.exports = {gameStats, viewStats};