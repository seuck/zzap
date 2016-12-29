// or more ingeneral: export default class {}
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah wah, I am ${this.name}`;
  }
}

// CommonJS syntax
// module.exports = Dog;

// ES6 syntax
export default Dog;
