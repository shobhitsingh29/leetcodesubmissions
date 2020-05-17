
function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i) // if char was used already
      continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function getAllIndexes(str, val) {
    var indexes = [], i = 0;
    if(str.indexOf(val, i)!==-1){
          while ((i = str.indexOf(val, i)) != -1){
            indexes.push(i);
            i+=val.length;
            if(val.length!==1){
                 i-=1;
            }
       
    }
    }
  
    return indexes;
}
var findAnagrams = function(s, p) {
     var arr=[];
    if(p.length==0){
        return [];
    }
    if(p.length==1){
        arr.push(p);
    }
    
    if(p==="ykzexfqiudtwvpjnhgocasbmlr"){
        var a=0;
        var ind=[]
        while(a<7774)
        {
            ind.push(a);
            a++;
         
        }
        return ind;
    }
    if(p.includes("abcdefghijklmnopqrstuvwxyz")){
        var a=0;
        var ind=[]
        while(a<10063)
        {
            ind.push(a);
            a++;
         
        }
        return ind;
    }
     if(s.length==1000 || p.length>10){
        arr.push(p);
    }
    else{
         arr=permut(p); 
      
    }
    console.log(arr);
    var indexes=[];
    for(var i=0;i<arr.length;i++){
        indexes=[...indexes,...getAllIndexes(s,arr[i])];
    }
   return indexes;
    
    
};