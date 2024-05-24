'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically returns {}

const jon = new Person('Jon', 1996);
console.log(jon);

console.log(jon instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jon.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jon.species, jonas.species);

console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 7, 8, 8, 9];
console.log(arr.__proto__);

// Don't do this
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

//class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

// const jon = new PersonCl('Jon', 1996);
// console.log(jon);
// jon.calcAge();
// jon.greet();

//Classes are not hoised
//Classes are first-class citizens
//Classes are executed in strick mode

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jon = Object.create(PersonProto);
jon.name = 'Jon';
jon.birthYear = 1996;
jon.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
sarah.calcAge();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Super always need to be first here
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const jon = new StudentCl('Jon Zav', 2019, 'Computer Science');
jon.introduce();
jon.calcAge();
*/
