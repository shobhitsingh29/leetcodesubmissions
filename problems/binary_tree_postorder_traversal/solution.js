/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(node,result=[]) {
    if (node) {
        postorderTraversal(node.left, result); 
        postorderTraversal(node.right, result);
        result.push(node.val);
    }
    return result
};
