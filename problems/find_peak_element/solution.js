/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length==1){
        return 0;
    }
    if(nums.length==2){
          if(nums[1]>nums[0]){
            return 1
        }
        return 0
    }
    for(var i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            return i
        }
        
    }
    if(nums[0]>nums[nums.length-1]){
     return 0
        
    }
    return nums.length-1
};