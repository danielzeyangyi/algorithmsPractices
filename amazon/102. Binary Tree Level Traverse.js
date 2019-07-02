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
var levelOrder = function(root) {
  let result = [];
  let queue = []; // record node of each level
  //corner case
  if (!root) return result;
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    let currLevel = [];
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      currLevel.push(cur.val);
      if (cur.left !== null) currLevel.push(queue.push(cur.left));
      if (cur.right !== null) currLevel.push(queue.push(cur.right));
    }
    result.push(currLevel);
  }
  return result;
};
