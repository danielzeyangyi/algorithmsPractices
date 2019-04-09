class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        # reverse each list
        result = [];
        for sub_list in A:
            tmp = [];
            i = len(sub_list) - 1;
            while i >= 0:
                tmp.append(sub_list[i]);
                i -= 1;
                result.append(tmp);
        # inverse each list
        inversed_list = [];
        for li in result:
            for el in li:
                if el == 1:
                    el = 0;
                else:
                    el = 1;
        return result;

