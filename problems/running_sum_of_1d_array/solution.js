/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   const re= nums.map((i,index)=>{
    if(index>0){
            nums[index]=nums[index]+nums[index-1];
            return nums[index];
        }else{
            return i
        }
    })
    return re;
    
};