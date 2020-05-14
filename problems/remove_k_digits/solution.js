var removeKdigits = function(num, k) {
     if (k==0) return num;
    var num=[...num];
    
   let i=0;
  while(k>0){
    while(num[i]<=num[i+1]&&i<num.length-1) i++;
    num.splice(i,1);
    k--;
    i=0;
  }
     return num.join('').replace(/^0+/, "") || "0";
    
}