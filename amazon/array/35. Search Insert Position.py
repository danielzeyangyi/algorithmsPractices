class Solution:
    nums = [1,3,5,6]
    target = 7
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if target > nums[-1]:
            return len(nums)
        for i in range(len(nums)):
            if nums[i] == target:
                return i
            else:
                if target > nums[i]:
                    i += 1
                else:
                    return i


test = Solution()
print(test.searchInsert(test.nums, test.target))

