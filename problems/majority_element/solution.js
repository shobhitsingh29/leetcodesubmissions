/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    var diff=0;
    var maxDif=0;
    var maj=nums[0];
    nums.map((val)=>{
        diff=nums.lastIndexOf(val)-nums.indexOf(val);
        if(diff>maxDif){
            maxDif=diff;
            maj=val;
        }
        
    });
    return maj;
    
    
    
};