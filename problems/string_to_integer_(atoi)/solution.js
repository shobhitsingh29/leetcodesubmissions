/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  return Math.max(Math.min(parseInt(s, 10) || 0, 2147483647), -2147483648);  
};