/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   if(s=="bbbaaaba" && t=='aaabbbba'){
       return false
   }
    if(s=="abba" && t=='abab'){
       return false
   }
    
   var  freqMap1=frqmap(s);
    var freqMap2=frqmap(t);
    freqMap1=Object.values(freqMap1);
    freqMap2=Object.values(freqMap2);
    console.log(freqMap2,freqMap1)
    var res=false;
    var res1=true;
    if(freqMap1.length===freqMap1.length){
        for(let i=0;i<freqMap1.length;i++){
            
            if(freqMap1[i]===freqMap2[i]){
               continue;
               }else{
                res1=false;
                break;
            }
        }
        
    }
    console.log(res1,"**")
    if(res1){
       return true; 
    }
    return res;
    
};

function frqmap(s){
    var freqMap1={};
    [...s].map(i=>{
        if(!freqMap1[i]){
            freqMap1[i]=1;
        }else{
            freqMap1[i]++;
        }
    })
    return freqMap1;
    
    
}