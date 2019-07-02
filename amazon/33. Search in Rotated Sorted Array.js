/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + (right - left) / 2; // in case over flow
    let midNum = nums[mid];

    // define mid number
    if (target < nums[0] == midNum < nums[0]) {
      // on the same side
      midNum = nums[mid];
    } else {
      // on different side
      midNum =
        midNum < nums[0] ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
    }

    // Binary search
    if (midNum > target) {
      right = mid - 1;
    } else if (midNum < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
