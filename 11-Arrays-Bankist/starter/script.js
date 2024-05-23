'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Splice changes original array
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse also mutates the orginal array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);

// Join
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// at()
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.at(-1));
console.log(arr.at(-2));

// also works on strings

console.log('Jonas'.at(0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------------------');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
  }
});

// Map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (movement) {
  return movement * euroToUsd;
});

// Arrow function version
// const movementsUsd = movements.map(movement => movement * euroToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * euroToUsd);
console.log(movementsUsdFor);

const movementDescp = movements.map(
  (mov, index) =>
    `Movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);
console.log(movementDescp);

//filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);

const withdraws = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdraws);


// Reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator is like a snowball, the zero at the end is telling where the accumulator to start
// const globalBalance = movements.reduce(function (acc, current, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + current;
// }, 0);

// arrow function version
const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(globalBalance);
console.log(balance);

// Chaining methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// Pipeline
const total = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(total);

*/
// sorting strings (puts it in alphabetical order)
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

// sorting numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (swithc order)

// Ascending
movements.sort((a, b) => a - b);
console.log(movements);
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     }
//     if (b > a) {
//       return -1;
//     }
//   })
// );

// Decending
movements.sort((a, b) => b - a);
console.log(movements);
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     }
//     if (b > a) {
//       return 1;
//     }
//   })
// );
