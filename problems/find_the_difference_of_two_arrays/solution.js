/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1=new Set(nums1);
    const map2=new Set(nums2);
        
    map1.forEach(item=>{
        if(map2.has(item)){
            map2.delete(item)
            map1.delete(item)
        }
    })
    return [Array.from(map1),Array.from(map2)]
    
};