var isValidSudoku = function(board) {
    let isValid = true;

    var isValidSquare = function(x, y) {
        let exists = {};
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {            
                if (board[i][j] === '.') {
                    continue;
                }
                if (exists[board[i][j]]) {
                    isValid = false;
                    return;
                }
                exists[board[i][j]] = true;
            }
        }
    }
  
    var isValidRow = function(x, y) {
        let exists = {};
        for (let i = y; i < board.length; i++) {
            if (board[x][i] === '.') {
                continue;
            }
            if (exists[board[x][i]]) {
                isValid = false;
                return;
            }
            exists[board[x][i]] = true;
        }
    }
  
    var isValidColumn = function(x, y) {
        let exists = {};
        for (let i = x; i < board.length; i++) {
            if (board[i][y] === '.') {
                continue;
            }
            if (exists[board[i][y]]) {
                isValid = false;
                return;
            }
            exists[board[i][y]] = true;
        }
    }
  
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!isValid) {
                return isValid;
            }
            if (i % 3 === 0 && j % 3 === 0) {
                isValidSquare(i, j);
            }
            if (i === 0) {
                isValidColumn(i, j);
            }
            if (j === 0) {
                isValidRow(i, j);
            }
        }
    }
    
    return isValid;
};