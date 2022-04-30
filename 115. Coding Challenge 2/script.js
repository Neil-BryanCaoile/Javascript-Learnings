const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// Loop game.scored array and print each player name
// Along with the goal
// "Goal 1: Lewandowski";

for (const [i, player] of game.scored.entries()) console.log(`${i} ${players}`);

//2

function printAveOdd() {
  const oddValues = Object.values(game.odds);
  let sumOdds = 0;
  let counter = 1;
  for (const odd of oddValues) {
    sumOdds += odd;

    if (counter == oddValues.length) {
      const averageOdds = Number.parseFloat(sumOdds / oddValues.length).toFixed(
        2
      );
      console.log(`Average: ${averageOdds}`);
    } else {
      counter++;
    }
  }
}

printAveOdd();

// 3.
// Print..
//    Odd of victory Bayern Munich: 1.33
//    Odd of draw: 3.25
//    Odd of victory Borrussia Dotmund: 6.5

const gameEntries = Object.entries(game.odds);
for (const [team, odd] of gameEntries) {
  // Game[team] -> You can get the value of an array using a key
  //
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
