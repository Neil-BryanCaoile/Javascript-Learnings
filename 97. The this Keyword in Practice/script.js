// This without any functions
console.log(`Console this: ` + this); //OUTPUT:  window

// Function with this
const calcAge = function (birthYear) {
  // This function will have its own THIS -> Window object
  console.log(`Calling regular function..`);
  console.log(2037 - birthYear);
  console.log(`Regular function: ` + this);
};

// Arrow Function with this
const calcAgeArrow = (birthYear) => {
  // This function will have its parent THIS -> Window object
  console.log(`Calling arrow function..`);
  console.log(2037 - birthYear);
  console.log(`Arrow function: ` + this);
};

// Funciton inside an object with this
const jonas = {
  // This will return its own THIS -> jonas object
  firstName: "Jonas",
  year: 1991,

  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // PROBLEM: THIS in this object is not pointing to jonas whereas pointing it to the window
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 1: using a variable to assign this
    const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2: using arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

const matilda = {
  year: 2017,
};

calcAge(1991);
calcAgeArrow(1980);

matilda.calcAge = jonas.calcAge; // Borrwing function in jonas.
matilda.calcAge(); // The THIS is still pointing to matilda.
const f = jonas.calcAge;
f();
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => a + b;
