/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) {
        return [];
    }
    let q = [root];
    let results = [];
    while (q.length > 0) {
        let _max = -Infinity;
        let len_q = q.length;
        for (let i = 0; i< len_q; i++) {
            let node = q.shift();
            _max = Math.max(node.val, _max);
            if (node.left){
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        results.push(_max);  
    }
    return results;
};