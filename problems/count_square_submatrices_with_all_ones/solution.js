const countSquares = function (matrix) {
    let result = 0;
    const col = matrix[0].length;
    const row = matrix.length;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if(i > 0 && j > 0 && matrix[i][j]>0){
            matrix[i][j] = Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1]) + 1;
                }
                result += matrix[i][j];
            }
        }
    return result;
};