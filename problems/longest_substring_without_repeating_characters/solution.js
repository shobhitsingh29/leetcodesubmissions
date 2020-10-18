var lengthOfLongestSubstring = function(s) {
    var n = s.length;
        var map = new Map();
        var ans = 0;
        var i = 0;
        var j = 0;
        while ((i < n && j < n)) {
            {
                if (!map.has(s[j])) {
                    map.set(s[j++]);
                    ans = Math.max(ans, j - i);
                }
                else {
                    map.delete(s[i++]);
                }
            }
        };
        return ans;
    
};