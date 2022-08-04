/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const res=merge(nums1,nums2);
    console.log(res,"**")
    if(res.length % 2==0){
        const mid=res.length/2;
        return (res[mid]+res[mid-1])/2;
    }else{
        const mid=Math.floor(res.length/2);
        return res[mid];
    }
};
function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}