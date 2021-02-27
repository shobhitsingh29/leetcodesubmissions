/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var newS=[...s].reverse().join('').split(' ');
    var output='';
    newS.forEach((item,index)=>{
        if(item.includes(' ')){
            // no-op
        }else if(item.length>0){
            output+=reverseStr(item);
            output+=' ';
        }
        
    });
    return output.trim();
};
    
var reverseStr=function(str){
    return [...str].reverse().join('')
}