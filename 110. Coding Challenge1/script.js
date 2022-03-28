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

// 1

const [players1, players2] = game.players;
console.log(`#1`);
console.log(`Players1: ` + players1);
console.log(`Players2: ` + players2);

// 2

const [gk, ...fieldPlayers] = players1;
console.log(`#2`);
console.log(`gk: ` + gk);
console.log(`fieldPlayers: ` + fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(`#3`);
console.log(`allPlayers: ` + allPlayers);

// 4
// During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const newPlayers = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...players1, ...newPlayers];
console.log("#4");
console.log(players1Final);

// 5
// Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log("#5");
console.log("team1: " + team1);
console.log("draw: " + draw);
console.log("team2: " + team2);

// 6
// Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

function printGoals(...players) {
  let playersLength = players.length;
  console.log(`${playersLength} goals were scored by: `);
  for (let i = 0; i < playersLength; i++) {
    console.log(players[i]);
  }
}
console.log("#6");

printGoals(...game.scored);
