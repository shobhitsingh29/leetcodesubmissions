/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let flagArray = [],
        result = 0;
    for(let i = 2; i < n; i++){
        if(flagArray[i] === undefined){
            // is Primes
            flagArray[i] = 1;
            result++;
            // remove it's multiples
            let j = 2;
            while(i * j < n){
                flagArray[i * j] = 0;
                j++;
            }
        }
    }
    return result;
};