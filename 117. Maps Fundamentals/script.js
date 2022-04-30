//Creating a MAP
const players = new Map();

//Fill up a Map
players.set('username', 'Leon11');
players.set(1, 'Testing 1 as data type...');

//Return the updated Map
console.log(players.set(2, 'Testing 2 as data type..'));

//Add array as a value
players.set('Skills', ['Sharingan', 'Rasengan', 'Chidori']);

skills2 = ['Twister', 'Windbind', 'Amaterasu'];
players.set('Skills2', skills2);
console.log(players);

players.set(true, '✅ Success!');
players.set(false, '❎ Failed!');

//Chaining
players.set('chain1', 'CHAIN1').set('chain2', 'CHAIN2').set('chain3', 'CHAIN3');

//READING DATA FROM A MAP
console.log(players.get('username'));
console.log(players.get('chain1'));
console.log(players.get(3));
console.log(players.get(true));
console.log(players.get(false));
