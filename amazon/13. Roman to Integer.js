/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s || !s.length) return 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let charList = s.split('');
  if (charList.length === 1) return map[charList[0]];
  let sum = map[charList[charList.length - 1]];

  for (let i = charList.length - 2; i >= 0; i--) {
    let l = map[charList[i]];
    let r = map[charList[i + 1]];
    sum = l < r ? sum - l : sum + l;
  }
  return sum;
};
