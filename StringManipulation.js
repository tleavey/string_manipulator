"use strict";

class StringManipulation {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }

  /* removePunctuation */
  /* Input: string */
  /* Output: string */
  static removePunctuation(paragraph) {
    if (!paragraph) throw new Error('must provide a string argument')
    if (typeof paragraph !== "string")
      throw new Error("removePunctuation() only accepts a string");
    // Regex removes punctuation
    let words = paragraph.replace(/[.,\/#'!\]\'$\"\[?%\^&\*;:{}=\-_`~()]/g, "");
    words = words.replace(/\s{2,}/g, " ");

    return words;
  }

  /* repeatedWords */
  /* Input: string */
  /* Output: object or string */
  static repeatedWords(paragraph) {
    if (typeof paragraph !== "string")
      throw new Error("repeatedWords() only accepts a string");

    let words = this.removePunctuation(paragraph);
    words = words.toLowerCase();
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

  /* hasAllUniqueChars */
  /* Input: string */
  /* Output: boolean */
  static hasAllUniqueChars(paragraph) {
    if (typeof paragraph !== "string")
      throw new Error("repeatedWords() only accepts a string");

    let visited = {};
    let allChars = paragraph.replace(" ", "");
    // These next two lines would do the same thing as above
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
