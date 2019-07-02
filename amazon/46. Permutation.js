/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  if (!nums) return [];

  let result = [];
  helper(0);

  function helper(index) {
    // base case
    if (index === nums.length) {
      result.push(nums);
      console.log(nums);
    }

    for (let i = index; i < nums.length; i++) {
      swap(i, index, nums);
      helper(index + 1);
      swap(i, index, nums);
    }
  }
  return result;
};

let swap = function(a, b, group) {
  let tmp = group[a];
  group[a] = group[b];
  group[b] = tmp;
};
