/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    if(nums.length<3){
       return false;
    }
         var first=Infinity;
    var sec=Infinity;
    
    for(let i=0;i<nums.length;i++){
       
         if(nums[i]<=first){
            
            first=nums[i];
            continue;
        }
      
        else if(nums[i]<=sec ){
            sec=nums[i];
                }else{
                    return true;
                }
         
    }
    return false;
    
};