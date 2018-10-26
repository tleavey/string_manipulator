const StringManipulation = require('./StringManipulation.js');

let result = StringManipulation.repeatedWords('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

result = StringManipulation.removePunctuation('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

result = StringManipulation.hasAllUniqueChars('Hello, my friend. My name is Tim. What is your name?');
console.log(result);
// console.log(StringManipulation.hasAllUniqueChars(['a']));
// console.log(StringManipulation.removePunctuation(['a']));