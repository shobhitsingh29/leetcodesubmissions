/**
 * @param {number} n
 * @return {number}
 */
 const dp=[0,1,2,3,5,8];

var climbStairs = function(n) {
    
if(n==2){
    return 2;
}
if(n==1){
    return 1;
}
if(dp[n]){
    return dp[n]
}
dp[n]=climbStairs(n-1)+climbStairs(n-2)
return dp[n];


};