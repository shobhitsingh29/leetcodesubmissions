/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    if( !Math.sqrt(num).toString().includes(".")){
        return true;
    }
    return false
};
