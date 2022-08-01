/**
 * @param {number} n
 * @return {number}
 */

    var dp=[0,1,1];

var tribonacci = function(n) {
    if(n>2){
        if(!dp[n]){
           dp[n]=tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
        }
            return dp[n];
        
    }else{
        return dp[n];
    }
    
    
};