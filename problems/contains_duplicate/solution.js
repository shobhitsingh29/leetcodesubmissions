var containsDuplicate = function (nums) {
    let sumToCount = new Set();
    for (i = 0; i < nums.length; i++) {
        if (sumToCount.has(nums[i])) return true;
        sumToCount.add(nums[i]);
    }
    return false;
};