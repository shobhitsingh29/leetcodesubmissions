/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let mid = 0;
let recursiveFunction = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return mid;

  // Find the middle index
  mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return mid;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};
var searchInsert = function (nums, target) {
  const res = recursiveFunction(nums, target, 0, nums.length);
  if (nums[res] < target) {
    return res + 1;
  } else {
    return res;
  }
};
