/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var arr=[]
    if(s.length==0){
        
        return true;
    }
    if(s.length<=1){
        
        return false;
    }
     arr.push(s[0]);
    for(var i=1;i<s.length;i++){
        if(s[i]==")" && arr[arr.length-1]=="(" ||
           s[i]=="}" && arr[arr.length-1]=="{"||
           s[i]=="]" && arr[arr.length-1]=="["){
             arr.pop();
        }else{
            arr.push(s[i]); 
        }
       
    }
   
    if(!arr.length){
        return true;
        }else{
            return false;
        }
};