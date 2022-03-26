"use strict";

// Create restaurant object
const restaurant = {
  name: "Classico Ittaliano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta width ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// The result of OR is not only boolean

// Short circuiting
// If the first operand is truthy, the other operand will be ignored.

console.log(`----- OR ----`);
console.log(3 || "Neil"); //3 is the truthy value
console.log("" || "Neil"); //Neil is the truthy value
console.log(true || 0); //True is the truthy value
console.log(undefined || null); //Null is the truthy value

console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello is true

// Using Ternary Operator
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// Using OR
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`-----AND ----`);
console.log(0 && "Jonas"); //Return the Falsey Value
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Neil"); //Return null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
