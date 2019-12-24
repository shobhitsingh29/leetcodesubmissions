/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var a=x.toString();
    var s=[...a];
    var neg=false;
    var flag=false;
    if(s[0]=="-"){
        neg=true;
        s=s.splice(1);
    }
    s=s.reverse();
    if(s[0]===0){
        flag=true;
         s=s.splice(0,s.length);
    }
    s=s.toString().split(",").join("");
    if(neg){
        
        s="-"+s;
    }
    if(parseInt(s)>2147483647){
        return 0;
    }
    if(parseInt(s)<-2147483648){
        return 0;
    }
    return parseInt(s)
};