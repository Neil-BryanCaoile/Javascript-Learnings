"use strict";

// Create restaurant object
const restaurant = {
  // Variables
  name: "Classico Ittaliano",

  // Array Variables
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //Object inside restaurant
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

  // Funciton
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Passing a deconstruct objects
  //Passing
  //Adding default values if values doesnot exist
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
};

// // Creating variables and getting value from Object RESTAURANT
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// // Adding modified name to the variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // DEFAULT VALUES
// // Incase the property does not exist default values will be used
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //Destructuring

// // Object inside another object
// //Restaurant > OpeningHours > saturday
// const {
//   fri: { open, close },
//   // fri is property
// } = openingHours;
// console.log(open, close);

// // Passing an object to a function
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //Testing default values
// //There are no time
// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// 2022-03-24
// This is my own code on Destructuring Objects

// First Lets create Object
