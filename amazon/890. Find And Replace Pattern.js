/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

var findAndReplacePattern = function(words, pattern) {
  let result = [];
  for (word of words) {
    // word: deq
    if (validPattern(word, pattern)) {
      result.push[word];
    }
  }
  return result;
};

var validPattern = function(w, p) {
  if (w.length !== p.length) return false;
  let mapW = new Map();
  let mapP = new Map();

  for (let i = 0; i < w.length; i++) {
    let charW = w[i];
    let charP = p[i];

    // check mapW
    if (!mapW.has(charW)) {
      mapW.set(charW, charP);
    }
    // check mapP
    if (!mapP.has(charP)) {
      mapP.set(charP, charW);
    }
    // cross checking
    if (mapW.get(charW) !== charP || mapP.get(charP) !== charW) return false;
  }
  return true;
};
