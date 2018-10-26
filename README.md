# string_manipulator
JS class that manipulates strings

## Static Methods  
* removePunctuation(string) => string
* repeatedWords(string) => object or string 
* hasAllUniqueChars(string) => boolean


## Examples
removePunctuation
```
let result = StringManipulation.removePunctuation('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: Hello my friend My name is Tim What is your name
```

repeatedWords
```
let result = StringManipulation.repeatedWords('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: { my: 2, name: 2, is: 2 }
```

hasAllUniqueChars
```
Example 1:  

result = StringManipulation.hasAllUniqueChars('Hello, my friend. My name is Tim. What is your name?');
console.log(result);

// Expected output: false


Example 2:

result = StringManipulation.hasAllUniqueChars('');
console.log(result);

// Expected output: false
```