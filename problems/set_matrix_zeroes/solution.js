
var setZeroes = function(matrix) {
     var isCol = false;
        var R = matrix.length;
        var C = matrix[0].length;
        for (var i = 0; i < R; i++) {
            {
                if (matrix[i][0] === 0) {
                    isCol = true;
                }
                for (var j = 1; j < C; j++) {
                    {
                        if (matrix[i][j] === 0) {
                            matrix[0][j] = 0;
                            matrix[i][0] = 0;
                        }
                    }
                    ;
                }
            }
            ;
        }
        for (var i = 1; i < R; i++) {
            {
                for (var j = 1; j < C; j++) {
                    {
                        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                            matrix[i][j] = 0;
                        }
                    }
                    ;
                }
            }
            ;
        }
        if (matrix[0][0] === 0) {
            for (var j = 0; j < C; j++) {
                {
                    matrix[0][j] = 0;
                }
                ;
            }
        }
        if (isCol) {
            for (var i = 0; i < R; i++) {
                {
                    matrix[i][0] = 0;
                }
                ;
            }
        }
    };
