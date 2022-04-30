'use strict';

// Destructuring Arrays
//  -a way of unpacking values from an Array or Object
//   into a seperate variables.

// Destruncturing Array Example
const elements = ['Fire', 'Wind', 'Lightning', 'Earth', 'Water'];
const [a, b, c, d, e] = elements; //make sure to add const.

const player = {
  //This is an object
  name: 'Leon Caoile',
  elements: ['Fire', 'Wind', 'Lightning'], //Array
  pet: 'Jyubi',
  weapon: 'Holy Rune Etched Sword',
  talent: 'Eight Extremities',
  jutsu: ['Jutsu1', 'Jutsu2', 'Jutsu3', 'Jutsu4', 'Jutsu5', 'Jutsu6'],

  attack: function (skl1, skl2) {
    return [this.jutsu[skl1], this.jutsu[skl2]];
  },
};

// Destructing First and Third value of an array.
const [first, , Third] = player.elements; //Empty spaces for values you dont want to include.

// Swapping Values Elm 1 and 3 using Destruction
let [elm1, , elm3] = player.elements; //Get the value firs
[elm1, elm3] = [elm3, elm1]; //Swap using Deconstruct

// Recieving 2 Values from a function
// that returns array using Destructuring.
const [firstAttack, SecondAttack] = player.attack(0, 2);
console.log(firstAttack);
console.log(SecondAttack);

// Destructuring nested array.
const nested = [1, 2, 3, ['a', 'b']];
const [i, , , [j, k]] = nested;

// Setting Default Values
const [p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r);
