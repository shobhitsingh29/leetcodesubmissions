var intersect = function(nums1, nums2) {
    var hash = {};
    var arr  = []
    var set  = new Set();
    for (var n of nums1) {
        hash[n] = (hash[n] || 0) + 1; 
        set.add(n);   
    }
    for (var n of nums2) {
      if (set.has(n) && hash[n] > 0) {
         arr.push(n);
         hash[n] = (hash[n] || 0) - 1; 
      }
    }
    return arr;
};
