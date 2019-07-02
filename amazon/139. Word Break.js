/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let set = new Set(wordDict);
  return wordSearch(s, set, 0);

  //     function wordSearch(start){
  //         if(start === s.length) return true;

  //         for(let end = start + 1; end <= s.length; end++){
  //             if(set.has(s.substring(start, end)) && wordSearch(end)){
  //               return true;
  //             }
  //         }
  //         return false;
  //     }
};

function wordSearch(s, set, start) {
  if (start === s.length) return true;

  for (let end = start + 1; end <= s.length; end++) {
    if (set.has(s.substring(start, end)) && wordSearch(s, set, end)) {
      return true;
    }
  }
  return false;
}
