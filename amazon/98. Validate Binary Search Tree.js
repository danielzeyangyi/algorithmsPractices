/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


 //# 1 recursion with upper and lower limit
var isValidBST = function(root) {
    if(root === null) return true;

    return isValidBSTHelper(root, null, null);
};

var isValidBSTHelper = function (node, min, max){
    if(node == null) return true;
    if(min != null && node.val <= min) return false;
    if(max != null && node.val >= max) return false;

    var left = isValidBSTHelper(node.left, min, node.val);
    var right = isValidBSTHelper(node.right, node.val, max);
    return left && right;
}