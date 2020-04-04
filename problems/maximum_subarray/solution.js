var maxSubArray = function(nums) {
    let currentMax = 0;
    return nums.reduce((maxArray, num) => {
        currentMax = Math.max(num, currentMax + num); 
        return Math.max(currentMax, maxArray);
    }, nums[0]);
};