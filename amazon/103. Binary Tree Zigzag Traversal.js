/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let layer = 0;
  let result = [];
  let dequeue = []; // maintain the order from left to right
  dequeue.unshift(root);

  while (dequeue.length) {
    let size = dequeue.length;
    let list = [];
    for (let i = 0; i < size; i++) {
      if (layer === 0) {
        // even layer:  left <- right
        let currNode = dequeue.pop();
        list.push(currNode.val);
        if (currNode.right !== null) {
          dequeue.unshift(currNode.right);
        }
        if (currNode.left !== null) {
          dequeue.unshift(currNode.left);
        }
      } else {
        // odd layer:  left -> right
        let currNode = dequeue.shift();
        list.push(currNode.val);
        if (currNode.left !== null) {
          dequeue.push(currNode.left);
        }
        if (currNode.right !== null) {
          dequeue.push(currNode.right);
        }
      }
    }
    result.push(list);
    layer = 1 - layer;
  }
  return result;
};
