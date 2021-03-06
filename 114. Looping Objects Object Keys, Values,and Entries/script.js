const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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
  name: "Classico Ittaliano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loop Options
//  -Object property names: use Object.keys()
//  -Values
//  -Both

// Looping throught Property names
console.log(`Looping through Property Name`);
const properties = Object.keys(openingHours); // Object.keys() will returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

console.log(`properties: ${properties}`);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`;
}

console.log(openStr);

// Property Values
console.log(`Looping through property values`);
const values = Object.values(openingHours); // Object.values()
console.log(values);

// Entire object
console.log("Looping through entire object");
const entries = Object.entries(openingHours);
console.log(entries);

// Destructure [{}]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and closed at  ${close}`);
}
