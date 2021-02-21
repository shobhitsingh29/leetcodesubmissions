/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0) {
    return false;
  }
    let char=x.toString();
    let l=0;
    let r=char.length-1;
    while(l<=r){
        if(char[l++]!==char[r--]){
            return false;
        }
    }
    return true;
};
