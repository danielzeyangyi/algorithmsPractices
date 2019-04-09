class Solution:
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(numbers) < 2:
            return False
        dic = {}
        for num, i in enumerate(numbers):
            if num in dic:
                return [dic[num] + 1, i + 1]
            else:
                dic[target - num] = i

