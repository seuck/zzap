/* eslint-disable no-console */

// CommonJS syntax
// const Dog = require('../shared/dog');

// ES6 syntax
import Dog from '../shared/dog';

const toby = new Dog('Toby');

console.log(toby.bark());
