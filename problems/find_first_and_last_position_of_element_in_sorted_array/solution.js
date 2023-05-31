/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start=-1;
    let end=-1;
    nums.forEach(function(n,i){
        if(n===target && start===-1){
            start = i;
        }
        if(n===target){
            end = i;
        }
    })




    return [start,end]

};
