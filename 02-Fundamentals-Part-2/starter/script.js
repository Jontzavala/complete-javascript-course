'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger(name) {
    console.log(`My name is ${name}`);
}

// invoking function
logger("Jonathan");
logger("Tim");
logger("Jonas");

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration can be called before it's created due to hoisting
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, "Jonathan"));
console.log(yearsUntilRetirement(1987, "Tim"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const friend1 = "Tim";
const friend2 = "Tom";
const friend3 = "Jon";

const friends = ["Tim", "Tom", "Jon"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // gets the last element in the array

friends[2] = "Jay" // only primitive values are immutable when using const. An array is not a primitive value therefore it can be changed.
console.log(friends);

const firstName = "Jonas"
const jonas = [firstName, "S", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const friends = ["Tim", "Tom", "Jon"];
// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// remove elements
const poppedElement = friends.pop(); // removes the last element.
console.log(friends)
console.log(poppedElement);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Tom"));

console.log(friends.includes("Tom"));

const jonas = {
    firstName: "Jonathan",
    lastName: "Z",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Tim", "Tom", "Jon"]
};

console.log(jonas.firstName); // dot notation must have real property name.


const jonas = {
    firstName: "Jonathan",
    lastName: "Z",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Tim", "Tom", "Jon"]
};

console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // square brackets can have an expression to find value of key.
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas?");

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request")
}

jonas.location = "Texas";
jonas["Instagram"] = "@jonas";
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[1]}`);

const jonas = {
    firstName: "Jonathan",
    lastName: "Z",
    birthYear: 1991,
    job: "teacher",
    friends: ["Tim", "Tom", "Jon"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    canDrive: function () {
        return this.hasDriversLicense ? "has a driver's license" : "does not have a driver's license";
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);

console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and ${jonas.canDrive()}`);

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonasArray = [
    "Jonathan",
    "Z",
    2037 - 1991,
    "teacher",
    ["Tim", "Tom", "Jon"],
    true
];

const jonasType = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from Array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling an Array
    // jonasType[i] = typeof jonasArray[i];
    jonasType.push(typeof jonasArray[i]);
}
console.log(jonasType);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") {
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("BREAK -------")

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") {
        break;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonasArray = [
    "Jonathan",
    "Z",
    2037 - 1991,
    "teacher",
    ["Tim", "Tom", "Jon"],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

// Loop inside of loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repitition ${rep}`);
    }
}

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let reps = 1;
// while (reps <= 10) {
//     console.log(`Lifting weights repetition ${reps}`);
//     reps++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/