/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let cur =0;
    let slow=0;
    if(nums.length==1){
        return nums
    }
    while(cur<nums.length){

        if(nums[cur]===0 && nums[slow]===0){
            cur++;
        }
         if(nums[cur]!==0 && nums[cur]!== undefined && nums[slow]===0){
            let temp=nums[cur];
            nums[cur]=nums[slow];
            nums[slow]=temp;
            cur++;
            slow++;
        }
        if(nums[cur]!==0 && nums[cur]!== undefined && nums[slow]!==0){
            cur++;
            slow++;
        }
    }
     return nums
};