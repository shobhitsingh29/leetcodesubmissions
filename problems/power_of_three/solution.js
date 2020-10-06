/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};