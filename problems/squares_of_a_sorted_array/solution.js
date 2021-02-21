/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];
    let left = 0;
    const len=nums.length-1;
    let right = len;
    let index = len;
    
    while(index >= 0){
        if(nums[left] * nums[left] > nums[right] * nums[right]){
            res[index] = nums[left] * nums[left]
            left++;
        } else{
            res[index] = nums[right] * nums[right]
            right--;
        }
        index--
    }
    return res
};
