console.log(`Assigning age = 30, oldAge = age`);
let age = 30;
let oldAge = age;

console.log(`Changing age = 31`);
age = 31;

console.log(`Result: (age: ${age}, oldAge: ${oldAge})`);

const me = {
  name: "Neil",
  age: 23,
};

const friend = me;
friend.age = 27;

console.log(`Problem: Both of Friend and Me are age 27 yet, Me should be 23.`);
console.log(`Result: (Friend: ${friend.age} , Me: ${me.age})`);
