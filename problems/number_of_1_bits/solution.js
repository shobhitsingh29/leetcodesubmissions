/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
         let count=0;
    let str=n.toString(2);
    console.log(str);
    for(let x of str){
        if(x==='1'){
            count++;
        }
    }
    return count;
};