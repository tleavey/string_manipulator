# StringManipulator
JS class that manipulates strings

## Static Methods  
* removePunctuation(string) => string
* repeatedWords(string) => object or string 
* hasAllUniqueChars(string) => boolean


## Examples
### removePunctuation
```
let result = StringManipulator.removePunctuation('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: Hello my friend My name is Tim What is your name
```


### repeatedWords
```
let result = StringManipulator.repeatedWords('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: { my: 2, name: 2, is: 2 }
```


### hasAllUniqueChars
```
Example 1:  

result = StringManipulator.hasAllUniqueChars('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: false


Example 2:

let result = StringManipulator.hasAllUniqueChars('Dogs are fun.');
console.log(result);

// Expected output: true
```
