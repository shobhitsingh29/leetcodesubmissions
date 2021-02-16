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
 Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree. 
 */
var preorderTraversal = function(node,result=[]) {
    if(node){
        node.val && result.push(node.val);
        node.left && preorderTraversal(node.left,result);
        node.right && preorderTraversal(node.right,result);
    }
    return result;
    
};