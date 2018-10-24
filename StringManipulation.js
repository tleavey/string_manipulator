"use strict";

class StringManipulation {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }

  /* removePunctuation */
  /* Input: string */
  /* Output: array of strings*/
  static removePunctuation(paragraph) {
    if (typeof paragraph !== 'string') throw new Error('removePunctuation() only accepts a string');
    // Regex removes punctuation
    let words = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    words = words.replace(/\s{2,}/g, " ");

    words = words.split(" ");
    let result = words.map(word => word.toLowerCase());
    
    return result;
  }
  
  /* repeatedWords */
  /* Input: string */
  /* Output: object or string */
  static repeatedWords(paragraph) {
    if (typeof paragraph !== 'string') throw new Error('repeatedWords() only accepts a string');

    let words = this.removePunctuation(paragraph);
    let wordCounts = {};
    let repeatedWords = {};
    // Counts all words
    for (let i = 0; i < words.length; i++) {
      if (wordCounts[words[i]]) {
        wordCounts[words[i]] += 1;
      } else {
        wordCounts[words[i]] = 1;
      }
    }
    // Words that repeated 2 or more times are put into repeatedWords object
    Object.keys(wordCounts).forEach(key => {
      if (wordCounts[key] > 1) {
        repeatedWords[key] = wordCounts[key];
      }
    });
    // Return repeatedWords object if any words have been repeated
    return !!Object.keys(repeatedWords).length &&
      repeatedWords.constructor === Object
      ? repeatedWords
      : "No repeated words";
  }
}