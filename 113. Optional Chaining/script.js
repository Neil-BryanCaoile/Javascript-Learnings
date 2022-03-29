const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
  openingHours,
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Lets get our opening hours in monday.
console.log(restaurant.openingHours.mon); //Undefined because mon property does not exist.
//console.log(restaurant.openingHours.mon.open); //this will result to error

// NOTE: To avoid this error we need to check each element if they exist.
//   -Check for .openingHours
//   -Check for .mon
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); //undefined

if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open); //11 because friday exist.

// The solution to this is Optional Chaining.

// Optional Chaining: If a cerain propery does not exist,
// then undifined will be returned.
// "?." mean optional chaining

// With optional chaining
console.log(restaurant.openingHours?.mon?.open); //undefined because .mon does not exist.
// Without optional chaining
//console.log(restaurant.openingHours.mon.open); //Error

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed"; //gets the open value or Closed
  // Using "||"" will result to closed because,
  // sat.open = Zero, this mean that it is a falsey value, we dont want that.

  // Instead we use "??- Nulling Qualesing Operator"
  // this will output zero in the console.
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining will work also whith Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // Return the method because order exist
console.log(restaurant.nothing?.(0, 1) ?? "Method does not exist"); // Method doe not exist

// Arrays
const users = [{ name: "Neil", email: "neilbryancaoile@gmail.com" }];
console.log(users[0]?.name ?? "User array empty");
