/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var p0 = 0, p1 = 0, p2 = 0;
    nums.map((val)=>{
        if(val===0){
            p0++;
        }else if(val===2){
            p2++;
        }else{
            p1++
        }
        
    })
    
    
    var i=0;
    while(p0--){
        nums[i]=0;
        i++;
    }
     while(p1--){
        nums[i]=1;
        i++;
    }
 while(p2--){
        nums[i]=2;
        i++;
    }    
};