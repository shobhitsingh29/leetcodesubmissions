/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let pairs=0;
    let unpaired_set=new Set();
    for(char of s){
        if(unpaired_set.has(char)){
            pairs++;
unpaired_set.delete(char)
        }else{
            unpaired_set.add(char)
        }
    }
    if(unpaired_set.size){
        return (pairs*2)+1
    }
    return pairs*2
    
};