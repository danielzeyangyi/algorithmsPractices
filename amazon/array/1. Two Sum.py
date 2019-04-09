class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        h = {}
        for i, x in enumerate(nums):
            h[x] = i

        for i, y in enumerate(nums):
            search = target - y
            if search in h and i != h[search]:
                return [i, h[search]]

test = Solution();
print(test.twoSum([3,2,3],6));


