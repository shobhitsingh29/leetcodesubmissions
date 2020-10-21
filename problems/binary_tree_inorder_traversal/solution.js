var inorderTraversal = function(node,result=[]) {
    if (node) {
        inorderTraversal(node.left, result); 
        result.push(node.val.toString());
        inorderTraversal(node.right, result);
    }
    return result
};
