"use strict";

module.exports = class Person {
  constructor(name) {
    this.name = name;
  }

  /**
   * Say hello
   *
   * @param {<type>} person { description }
   */
  greet(person) {
    return `Hello ${person}, my name is ${this.name}`;
  }
};
