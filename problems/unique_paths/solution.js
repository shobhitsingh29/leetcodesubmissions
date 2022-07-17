var uniquePaths = function(m, n) {
 let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    if(m==1 || n==1){
        return 1
    }
   uniquePaths1(dp,m,n);
    return dp[m][n]
    
};

var uniquePaths1 = function(dp,m, n) {
     
    if(m==1 || n==1){
       return 1;
    }
    
    if(dp[m] && dp[m][n]){
        return dp[m][n];
    }else{
        
      dp[m][n]=uniquePaths1(dp,m-1, n)+ uniquePaths1(dp,m, n-1);
        return dp[m][n];
    }
       
       
        
        
    
};
