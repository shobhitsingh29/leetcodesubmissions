/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map1=new Map();
    nums.map((val)=>{
        
        if(map1.has(val)){
            var mapVal=map1.get(val);
            map1.set(val,mapVal+1);
            
        }else{
               map1.set(val,1);
        }
    })
    var max=0;
    var maxKey=nums[0];
    for (let [key, value] of map1){
	
        if(value>max){
            max=value;
            maxKey=key
        }
}
    return maxKey;
    
};