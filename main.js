const StringManipulation = require('./StringManipulation.js');

console.log(StringManipulation.repeatedWords('Example of using the StringManipulation class because an example can be helpful can can can be. Be.'));
console.log(StringManipulation.removePunctuation('Examp\'les,,, " :" ;[]of using the StringManipulation class because an example can be helpful.'));
console.log(StringManipulation.hasAllUniqueChars('yupers'));
console.log(StringManipulation.hasAllUniqueChars('this should be false'));


console.log(StringManipulation.removePunctuation('Hello, my friend. How are you?'))