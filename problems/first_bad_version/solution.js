var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left <= right){
            let middle = left + Math.floor((right - left) / 2);
            if(isBadVersion(middle)){
                if ((middle-1 > 0 && !isBadVersion(middle-1)) || (middle === 1)){
                    return middle;
                }else{
                    right = middle - 1;
                }
            }else{
                left = middle + 1;
            }
        }
        return -1;
    };
};