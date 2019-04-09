class Solution:

    nums = [1, 1]
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0;
        dist_set = set()
        while i <= len(nums) - 1:
            if nums[i] in dist_set:
                nums.remove(nums[i])
            else:
                dist_set.add(nums[i])
                i += 1
        return len(nums)

test = Solution()
print(test.removeDuplicates(test.nums))
print(test.nums)

