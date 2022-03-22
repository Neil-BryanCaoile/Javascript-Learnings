"use -strict";

// Var is a function sciope

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // birthYear can be used inside this function
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1081 && birthYear <= 1996) {
      var millenial = true;
      const str = `Ohh, you're a millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
