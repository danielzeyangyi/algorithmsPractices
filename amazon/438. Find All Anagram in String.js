/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(l, s) {
  // base case
  if (s.length > l.length) return [];

  let result = [];
  let map = buildMap(s);
  let match = 0;

  for (let i = 0; i < l.length; i++) {
    let tmp = l[i];
    let count = map[tmp];

    // check right side of window
    if (count != null) {
      if (count === 1) match++;
      map[tmp] = map[tmp] - 1;
    }

    // check the leftMost el about to be kicked out of the window
    if (i >= s.length) {
      tmp = l[i - s.length];
      count = map[tmp];
      if (count != null) {
        if (count === 0) match--;
        map[tmp] = map[tmp] + 1;
      }
    }

    // check if curr window contains anagram
    if (match === Object.keys(map).length) {
      result.push(i - s.length + 1);
    }
  }
  return result;
};

var buildMap = function(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[input[i]] = obj[input[i]] ? obj[input[i]] + 1 : 1;
  }
  return obj;
};
