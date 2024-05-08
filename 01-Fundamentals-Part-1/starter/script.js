/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof "Fun");
// console.log(typeof 23);

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991; // by default use const over let.
// birthYear = 1990; can't change the value of a const.

// const job; // need an initial value to use const.

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "S";
console.log(firstName + " " + lastName);

// Assignment Opeerators
let x = 10 + 5;
x += 10; // x = x + 10; = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
let now = 2024;

const jonas = "I'm " + firstName + " and I'm a " + (now - birthYear) + " year old " + job;
console.log(jonas);

// Template String
const jonasNew = `I'm ${firstName}, a ${now - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`String
multiple
line`);

const age = 15;

if (age >= 18) {
    console.log(`old enough to drive`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Not old enough you have ${yearsLeft} years left.`);
}

// Type Conveersion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // returns NaN meaning not a valid number.

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old"); // plus operator turns the number into a string
console.log("23" - "10" - 3); // any other math operator turns the string into a number
console.log("23" * "2");

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height = 123;
if (height) {
    console.log("Yay height is defined");
} else {
    console.log("Height is not defined");
}
*/