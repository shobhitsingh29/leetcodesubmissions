/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
   
    if(-2147483648 === dividend && divisor === -1) return 2147483647;
    return Math.floor(parseInt(dividend/divisor))
};