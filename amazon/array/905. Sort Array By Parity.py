class Solution:
    def sortArrayByParity(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        listEven =[]
        listOdd=[]
        for el in A:
            if el%2 == 0:
                listEven.append(el);
            else:
                listOdd.append(el);
        return (listEven + listOdd);

obj1 = Solution();
print(obj1.sortArrayByParity([3,1,2,4]))
