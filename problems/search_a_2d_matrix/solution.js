/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row=matrix.length;
    var col=matrix[0].length;
        // if(target===matrix[0][0]){
        //     return true;
        // }
    for (var i=0;i<row;i++){
        for (var j=0;j<col;j++){
            if(target===matrix[i][j]){
                return true;
            }else if(target>matrix[i][col]){
                i+=1;
            }
        }
    }
    return false;
};