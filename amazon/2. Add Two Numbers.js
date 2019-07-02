/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0);
  let a = l1;
  let b = l2;
  let carry = 0;
  let curr = result;

  while (a || b || carry) {
    let val1 = a ? a.val : 0;
    let val2 = b ? b.val : 0;
    let sum = val1 + val2 + carry;

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    carry = sum > 10 ? 1 : 0;

    a = a && a.next;
    b = b && b.next;
  }

  return result.next;
};
