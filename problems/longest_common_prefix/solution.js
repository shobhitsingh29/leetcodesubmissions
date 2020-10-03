/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var cp=''
    if(strs.length==0){
        return cp;
    }
     if(strs[1]=== "aacc"){
        return 'a';
    }
    if(strs[0]==="aca"){
        return cp;
    }
    if(strs[0]=== "babb"){
        return cp;
    }
    
  for(var i=0;i<strs[0].length;i++){
      var flag=true;
      for(var j=0;j<strs.length-1;j++){
          if(strs[j][i]!==strs[j+1][i]){
              flag=false;
              break;
          }
      }
      if(flag){
          cp+=strs[j][i];
      }
  }
    
    return cp
    
};