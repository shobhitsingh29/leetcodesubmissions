/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0) return b;
  if (b === 0) return a;
  while (b !== 0) {
    // imagine newA = a^b
    // imagine newB = a&b<<1
    // we keep looping until b goes to zero
    // b will eventually go to zero since b is keeping shifting to the left, and b is result of (a&b)
    let newA = a^b;
    let newB = (a&b)<<1;
    a = newA;
    b = newB;
  }
  return a;
};