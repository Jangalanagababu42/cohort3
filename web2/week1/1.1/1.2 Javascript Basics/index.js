// assignment-1
let favcolour = "black";
const myheight = 162;
var pizzaIsFavourite = true;
console.log("Favourite Colour :", favcolour);
console.log("My Height in cms :", myheight);
console.log("Is Pizza is My Favourite :", pizzaIsFavourite);

// assignment-2

function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));
console.log(sum(4, "5"));
console.log(sum("4", 5));
console.log(sum("4", "5"));

// assignment-3
function canVote(age) {
  return age > 18 ? "you can vote buddy" : "sorry, wait for next election";
}
console.log(canVote(24));

// assignment-4
let num = 30;
if (num % 2 === 0) {
  console.log("hey it is even");
} else {
  console.log("hey it is odd");
}

// assignment-5

function calsum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(calsum(8));

// Assignment-6
// Write a function that takes a user as an input and greets them with their name and age

let user = {
  name: "Harkirat",
  age: 17,
  gender: "male",
};
function nameAndage(user) {
  return `Congrats Mr ${user.name} Your age is ${user.age}`;
}
console.log(nameAndage(user));

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greeting(user) {
  return `Hello ${user.gender === "male" ? "Mr" : "Mrs"} ${
    user.name
  } your age is ${user.age} and you are ${
    user.age > 18 ? "eligible" : "Not eligible "
  } to vote`;
}
console.log(greeting(user));

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
const numbers = [1, 45, 2, 34, 7, 5, 6, 0];
function evenArray(numbers) {
  let newarr = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      newarr.push(numbers[i]);
    }
  }
  return newarr;
}
console.log(evenArray(numbers));

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [
  {
    name: "Harkirat",
    age: 1,
    gender: "male",
  },
  {
    name: "aman",
    age: 22,
    gender: "male",
  },
  {
    name: "naman",
    age: 42,
    gender: "female",
  },
  {
    name: "vaman",
    age: 2,
    gender: "male",
  },
];
function votersList(users) {
  let voterarr = [];
  return users.filter((u) => u.age > 18 && voterarr.push(u));
}
console.log(votersList(users));
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function malevotersList(users) {
  let voterarr = [];
  return users.filter((u) =>
    u.age > 18 ? u.gender === "male" && voterarr.push(u) : ""
  );
}
console.log(malevotersList(users));
