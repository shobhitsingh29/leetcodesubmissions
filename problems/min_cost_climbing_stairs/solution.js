/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost,dp={}) {
    dp[cost.length-1]=cost[cost.length-1];
    dp[cost.length-2]=cost[cost.length-2];
    
    for (var i=cost.length-3;i>=0;i--){        
        if(!dp[i]){            
        dp[i]=cost[i]+Math.min(dp[i+1],dp[i+2]);            
        }
    }
    return Math.min(dp[0],dp[1]);
    
};