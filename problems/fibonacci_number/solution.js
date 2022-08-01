/**
 * @param {number} n
 * @return {number}
 */
    var dp=[0,1];

var fib = function(n) {
    
    if(n>1){
        if(!dp[n]){
            
           dp[n]=fib(n-1)+fib(n-2) 
        }
            return dp[n]
        
    }else{
        return dp[n];
    }
    
    
};