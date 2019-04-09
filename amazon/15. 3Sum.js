/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    nums = nums.sort((a, b) => { a-b});

    for(var i = 0; i < nums.length - 2; i++){
        if (nums[i] > 0){
            return result;
        }
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        for (var j = i + 1, k = nums.length -1; j < k;){
            if (nums[i] + nums[j] + nums[k] === 0){
                result.push([ nums[i], nums[j], nums[k] ]);
                j++;
                k--;
                while (nums[j] === nums[j-1] && j < k){
                    j++;
                }

                while (nums[k] === nums[k+1] && j < k){
                    k--;
                }
            }
            else if (nums[i] + nums[j] + nums[k] < 0){
                j++;
            }
            else {
                k--;
            }
        }
    }

    return result;
};