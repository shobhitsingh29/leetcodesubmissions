

var getRow = function(rowIndex,dp={}) {
    
    if(rowIndex==0){
        dp[rowIndex]=[1];
        return [1]
    }
    if(dp[rowIndex]){
        return dp[rowIndex];
    }
    let prevRow=getRow(rowIndex-1,dp);
    let i=0;
    //push 1 at start
    let result=[1];
    while(i+1<prevRow.length){
        
        result.push(prevRow[i]+prevRow[i+1])
        i++;
    }
    //push 1 at End
    result.push(1);
    dp[rowIndex]=result;
    return result;
    
    
};