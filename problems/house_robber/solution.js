var rob = function(nums) {
    if(nums.length===0) return 0;
    let maxMoney=[];
    maxMoney[0]=nums[0];
    maxMoney[1]=Math.max(nums[0],nums[1]);
    maxMoney[2]=Math.max(maxMoney[0]+nums[2],maxMoney[1]);
   
    for(let i=3;i<nums.length;i++){
        maxMoney[i]=Math.max(maxMoney[i-2]+nums[i],maxMoney[i-1]); 
    }
    return maxMoney[nums.length-1];
};