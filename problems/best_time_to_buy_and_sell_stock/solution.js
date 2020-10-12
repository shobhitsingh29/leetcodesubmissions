/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max=0;
    var profitMax=0;
    for(var i=prices.length-1;i>=0;i--){
        var maxtemp=0;
        var profit=0;
        if(prices[i]>prices[i-1]){
           maxtemp=prices[i];
           }
        if(maxtemp>max){
            max=maxtemp;
        }
        profit=max-prices[i-1];
        if(profit>profitMax){
            profitMax=profit
        }
    }
    
    return profitMax
    
};