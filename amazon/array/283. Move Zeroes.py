class Solution:
    nums = [1, 0, 0, 0, 3, 12];

    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """

        # my stupid solution
        # for index in range(len(nums)):
        #     if nums[index] == 0:
        #         nums.remove(nums[index]);
        #         nums.append(0);

        zero = 0  # records the position of "0"
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i], nums[zero] = nums[zero], nums[i]
                zero += 1



test = Solution();
test.moveZeroes(test.nums)
print(test.nums)
