"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivered({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Jon Zav".split(" "));

const [firstName, lastName] = "Jon Zav".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("ashley beth johnson");

//padding

const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("jonas".padStart(25, "+"));

const maskCredit = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCredit(472843743845));
console.log(maskCredit("853489535354"));

//Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line`.repeat(n));
};

planesInLine(5);
planesInLine(12);

/*

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in a passenger name
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Compare email

const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

console.log(email === normalizeEmail);

//replacing

const priceGB = "288,78k";
const priceUS = priceGB.replace("k", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to bording door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

//Booleans
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the New Airbus family");
}


const airline = "TAP Airline";
const plane = "1BP";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("P"));
console.log(airline.lastIndexOf("A"));
console.log(airline.indexOf("Airline"));

console.log(airline.slice(4));
console.log(airline.slice(4, 8));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`${seat} is a middle seat`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("16E");

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

console.log(question);

// Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log(...question);

/*
const rest = new Map();

rest.set("name", "The Place");
rest.set(1, "Austin");
rest.set(2, "Houston");

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]).set("open", 11).set("close", 23).set(true, "we are open").set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

rest.delete(2);

const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest);
console.log(rest.size);

rest.set([1, 2], "Test");

console.log(rest.get(arr));

// property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}

// console.log([...menu.entries()]);

// 1) Destructuring

// Spread because on right side of the assignment operator
const arr = [1, 2, ...[3, 4]];

// Rest syntax because it's on the left hand side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , riostto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, riostto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("pepperonni", "jalepenos", "spinach", "cheese");
restaurant.orderPizza("Cheese");


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables are: arrays, maps, strings, sets. Not objects
const str = "Jonathan";
const letters = [...str, " ", "Z."];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
const newResturant = { ...restaurant, founder: "Him", foundedIn: 2024 };
console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "New Name";
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.orderDelivered({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivered({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//setting default value for when we don't have a hard coded value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring Array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// skip the second element with the empty space
const [first, , second] = restaurant.categories;
console.log(first, second);

//switching the first and third element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switch without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switch with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array, destructuring inside of an array
const nested = [2, 4, [5, 6]];
// const [firstElement, , thirdElement] = nested;
// console.log(firstElement, thirdElement);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
