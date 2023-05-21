/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let flag=true;
  while (nums.indexOf(val) >= 0) {
    flag=false;
    nums[nums.indexOf(val)] = undefined;
  }

  nums.sort()
    .forEach(function (element,i) {
      if(element === undefined){
        const temp= element;
        nums[i]=nums[i+1];
        nums[i+1] = temp;
      }
    });

  if(!flag) {
    const index = nums.indexOf(undefined) || 0;
    if (index >= 0) {
      nums.length = index;

    } else {
      nums.length = 0;

    }
  }

  return nums.length;
};
