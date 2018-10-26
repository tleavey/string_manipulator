"use strict";

class StringManipulation {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }

  /* removePunctuation */
  /* Input: string */
  /* Output: array of strings*/
  static removePunctuation(paragraph) {
    if (!paragraph) throw new Error('must provide a string argument')
    if (typeof paragraph !== "string")
      throw new Error("removePunctuation() only accepts a string");
    // Regex removes punctuation
    let words = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    words = words.replace(/\s{2,}/g, " ");
    words = words.split(" ");

    return words;
  }

  /* _convertCase */
  /* Input: array, string */
  /* Output: array */
  static convertCase(words, newCase) {
    if (!newCase) throw new Error('must provide a case to be converted to as argument');
    if (!words || !Array.isArray(words)) throw new Error('must provide an array as argument');
    let result ='';
    if (newCase === "lower") {
      result = words.map(word => word.toLowerCase());
    }
    else if (newCase === "upper") {
      result = words.map(word => word.toUpperCase());
    } else {
      throw new Error('2nd argument must be lower or upper')
    }
    return result;
  }

  /* repeatedWords */
  /* Input: string */
  /* Output: object or string */
  static repeatedWords(paragraph) {
    if (typeof paragraph !== "string")
      throw new Error("repeatedWords() only accepts a string");

    let words = this.removePunctuation(paragraph);
    words = this.convertCase(words, 'lower');
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

  static hasAllUniqueChars(paragraph) {
    if (typeof paragraph !== "string")
      throw new Error("repeatedWords() only accepts a string");

    let visited = {};
    let allChars = paragraph.replace(" ", "");
    // This next two lines would do the same thing as above
    // let allChars = paragraph.replace( /\s/g, '');
    // let allChars = paragraph.split(' ').join('');

    for (let oneChar of allChars) {
      if (visited[oneChar]) {
        return false;
      }
      visited[oneChar] = 1;
    }
    return true;
  }
}

module.exports = StringManipulation;
