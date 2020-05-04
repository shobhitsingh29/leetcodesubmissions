/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(N) {
     return parseInt([...(N).toString(2)].map(val=>val=='0'?'1':'0').join(''),2)
};