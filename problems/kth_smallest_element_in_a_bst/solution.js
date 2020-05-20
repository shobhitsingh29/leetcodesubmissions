function inOrder(node, result) {if (node) {inOrder(node.left, result);result.push(node.val.toString());inOrder(node.right, result);}}
var kthSmallest = function(root, k) {var result = [];inOrder(root, result);
    return result[k - 1];
};