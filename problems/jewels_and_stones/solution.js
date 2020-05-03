/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var arr=[...S],count=0;
    for(var i=0;i<arr.length;i++){
            if(J.includes(arr[i])){
                count++;
            }
    }
    return count;
};