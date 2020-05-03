/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  String.prototype.count=function(c) { 
  var result = 0, i = 0;
  for(i;i<this.length;i++)if(this[i]==c)result++;
  return result;
};
    if(magazine.includes(ransomNote)){
        return true;
    }else{
        var flag=true;
        for(var i=0;i<ransomNote.length;i++){
            if(magazine.count(ransomNote.charAt(i))<ransomNote.count(ransomNote.charAt(i))){
                flag=false;
                break;
            }
        }
        return flag;
        
    }
    return false;
    
};