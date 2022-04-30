const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Attaching this object to the restaurant
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Ittaliano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  // This is a function -> use it
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta width ${ing1}, ${ing2}, ${ing3}`);
  },

  // This is a function but different syntax
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Data is stored in Key Value pairs in Map (KEY/VALUE)
// In maps, KEYS can have any type
//

const rest = new Map(); // Create new Map

// Adding single data
rest.set('name', 'Classico Italliano'); // Key , Value
rest.set(1, 'Frienze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

// Adding array Data in one line
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//Getting the values out by using their keys
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Cleaver way to use map
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // Boolean
rest.delete(2); //Delete
console.log(rest.size); //Get size
// rest.clear //Get

// Create Array
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// DOM
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
