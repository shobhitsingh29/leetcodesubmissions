/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

var kthGrammar = function(N, K) {
    
    if (N === 1) {
        return K - 1;
    }
    
    let half = 2 ** (N - 1);
    if (K <= half) {
        return kthGrammar(N-1, K);
    } else {
        return 1 ^ kthGrammar(N-1, K-half);
    }
    
};