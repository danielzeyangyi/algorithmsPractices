/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s == null || t == null) return false;
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    const sLetter = s.charAt(i);
    const tLetter = t.charAt(i);

    if (!map['s' + sLetter]) map['s' + sLetter] = tLetter;
    if (!map['t' + tLetter]) map['t' + tLetter] = sLetter;
    if (
      's' + sLetter !== map['t' + tLetter] ||
      't' + tLetter !== map['s' + sLetter]
    )
      return false;
  }
  return true;
};
