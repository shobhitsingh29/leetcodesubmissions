/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums=nums.sort((a,b)=>(a-b))
    var len=nums.length;
    var res=[];
    while(len){
        
        if(nums[len-1]!=='undefined'  && nums[len]==nums[len-1]&& nums[len-2]!=='undefined' && nums[len-1]!=nums[len-2] ){
            
            res.push(nums[len])
        }
        
        len--;
    }
    console.log(res);
    return res.sort((a,b)=>(a-b))
};