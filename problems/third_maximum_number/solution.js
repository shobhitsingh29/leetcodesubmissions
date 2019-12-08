/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   var n=nums.sort(function(a,b){return a - b})
     n=[...new Set(n)];

if( n[n.length-3]!==undefined){
    return n[n.length-3]
}
    else {
        return n[n.length-1] 
    }
};