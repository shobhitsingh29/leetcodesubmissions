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
 * @return {number[][]}
 */
var levelOrder = function(node,queue=[],res=[],level=0) {
    var output=queue.shift();
        if(!res[level-1]){
            res[level-1]=[];
        }
            output!==undefined && res[level-1].push(output);
      if(node){
            queue.push(node.val);
            levelOrder(node.left,queue,res,level+1);
            levelOrder(node.right,queue,res,level+1);
    }
    
    return res;
};