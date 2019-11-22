/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index1, index2;
    for(var i=0;i<nums.length;i++){
         for(var j=i+1;j<nums.length;j++){
        
             if(nums[i]+nums[j]===target){
                 index1=i;
                  index2=j;
                 
             }
         }
    }
        return [ index1, index2]
};