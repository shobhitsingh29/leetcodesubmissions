/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len=nums.length;
    var j=1;
    var i=0;
    while(i<len-1){
        if(nums[i]!==nums[i+1]){
            nums[j]=nums[i+1];
            j++;
        }
        i++;
    }
   return j
};